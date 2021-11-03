import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { initUser } from './redux/reducers/user';
import './App.css';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import Message from './Components/message';
import AppContainer from './Containers/AppContainer';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {
  createMessage,
  createProfile,
  deleteProfile,
  updateProfile,
} from './graphql/mutations';
import { listMessages, listProfiles, getProfile } from './graphql/queries';
import { onCreateMessage } from './graphql/subscriptions';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const dispatch = useDispatch();
  const initStateMessage: any[] = [];
  const [stateMessages, setStateMessages] = useState(initStateMessage);
  let initState: any = null;
  const [user, setUser] = useState(initState);
  const [id, setId] = useState(initState);
  const [profileIs, setProfileIs] = useState(initState);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const amplifyUser = await Auth.currentAuthenticatedUser();
        console.log('amplifyUser.id: ', amplifyUser.id);
        setUser(amplifyUser);
      } catch (err) {
        setUser(null);
      }
    };
    fetchUser();

    const subscription = (
      API.graphql(graphqlOperation(onCreateMessage)) as any
    ).subscribe({
      next: ({ provider, value }: { provider: any; value: any }) => {
        setStateMessages((stateMessages) => [
          ...stateMessages,
          value.data.onCreateMessage,
        ]);
      },
      error: (error: any) => console.warn(error),
    });
  }, []);

  useEffect(() => {
    async function getMessages() {
      try {
        const messagesReq = (await API.graphql({
          query: listMessages,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as any;
        setStateMessages([...messagesReq.data.listMessages.items]);
      } catch (error) {
        console.error(error);
      }
    }
    getMessages();

    const getProfiles = async () => {
      console.log('username:', user?.username);
      try {
        const profiles = (await API.graphql({
          query: listProfiles,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as any;
        console.log('Profiles: ', profiles.data.listProfiles.items);

        for (let profile of profiles.data.listProfiles.items) {
          if (profile.userName === user.username) {
            console.log('profile.id: ', profile.id);
            setId(profile.id);
            setProfileIs(true);
            console.log('id in loop:', id);
            return;
          }
        }
        setProfileIs(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      getProfiles();
    } else {
      console.log('No User detected');
    }
  }, [user]);

  useEffect(() => {
    const makeProfile = async () => {
      console.log('trying to make profile');
      try {
        await API.graphql({
          authMode: 'AMAZON_COGNITO_USER_POOLS',
          query: createProfile,
          variables: {
            input: {
              userName: user.username,
            },
          },
        });
        console.log('Created profile');
      } catch (err) {
        console.error('got an error: ', err);
      }
    };

    const getProf = async () => {
      try {
        console.log('Id from inside getProf: ', id);
        const userProf = (await API.graphql({
          // authMode: 'AMAZON_COGNITO_USER_POOLS',
          query: getProfile,
          variables: {
            id: id,
          },
        })) as any;
        console.log('user profile: ', userProf);
        dispatch(initUser(userProf.data.getProfile));
      } catch (err) {
        console.log('error getting profile: ', err);
      }
    };

    if (profileIs === false) {
      makeProfile();
    } else {
      getProf();
    }
  }, [profileIs]);

  const [messageText, setMessageText] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(event.target.value);

    setMessageText('');

    const input = {
      message: messageText,
      owner: user.username,
    };

    try {
      await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: createMessage,
        variables: {
          input: input,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteAllProfiles = async () => {
    try {
      const profiles = (await API.graphql({
        query: listProfiles,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as any;
      // console.log('Profiles: ', profiles.data.listProfiles.items);

      for (let profile of profiles.data.listProfiles.items) {
        try {
          await API.graphql({
            authMode: 'AMAZON_COGNITO_USER_POOLS',
            query: deleteProfile,
            variables: {
              input: { id: profile.id },
            },
          });
          console.log('deleted profile');
        } catch (err) {
          console.log('delete error: ', err);
        }
      }
      // setProfileIs(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProf = async (value: any) => {
    let prof: any;
    try {
      prof = await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: updateProfile,
        variables: {
          input: value,
        },
      });
      console.log('updateProfile return: ', prof.data.updateProfile);
      return prof.data;
    } catch (error) {
      console.log('error while updating profile: ', error);
    }
  };

  return (
    // <div style={styles.container}>
    <div className="App grid bg-blue-default w-full h-full bg-white auto-rows-auto auto-cols-auto gap-x-1 gap-y-1">
      <AmplifySignOut />
      <button
        onClick={() => {
          updateProf({
            id: id,
            lastName: 'Diebold',
            about: 'This is just test',
          });
        }}
      >
        updateProf
      </button>
      {/* <button onClick={deleteAllProfiles}>clear profiles</button> */}
      {/* <h1>This is our app</h1>
      <h2>Amplify Messages</h2>
      {stateMessages
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
        .map((message) => (
          <Message
            message={message}
            isMe={user.username === message.owner}
            key={message.id}
          />
        ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="message"
          name="message"
          autoFocus
          required
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Send a message"
        />
        <button>Send</button>
      </form> */}
      <AppContainer />
    </div>
  );
}

export default withAuthenticator(App);
