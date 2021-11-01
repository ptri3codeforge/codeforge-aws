import React, { useEffect, useState } from 'react';

import './App.css';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import Message from './components/message';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { createMessage } from './graphql/mutations';
import { listMessages } from './graphql/queries';
import { onCreateMessage } from './graphql/subscriptions';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

// export async function getServerSideProps({ req }: { req: any }) {
//   const SSR = withSSRContext({ req });
//   try {
//     const user = await SSR.Auth.currentAuthenticatedUser();

//     const response = await SSR.API.graphql({
//       query: listMessages,
//       authMode: 'AMAZON_COGNITO_USER_POOLS',
//     });

//     return {
//       props: {
//         messages: response.data.listMessages.items,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         messages: [],
//       },
//     };
//   }
// }

function App() {
  const initStateMessage: any[] = [];
  const [stateMessages, setStateMessages] = useState(initStateMessage);
  let initState: any = null;
  const [user, setUser] = useState(initState);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const amplifyUser = await Auth.currentAuthenticatedUser();
        console.log(amplifyUser);
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
  }, [user]);

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

  return (
    // <div style={styles.container}>
    <div className="App">
      <AmplifySignOut />
      <h1>This is our app</h1>
      <h2>Amplify Messages</h2>
      {stateMessages
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
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
      </form>
    </div>
  );
}

export default withAuthenticator(App);
