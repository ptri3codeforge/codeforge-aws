import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { updateProfile } from '../../graphql/mutations';
import { getProfile } from '../../graphql/queries';
import { onCreateMessage } from '../../graphql/subscriptions';
export interface UserState {
  id: string;
  userName: string;
  userBio: string;
  firstName: string;
  lastName: string;
  city: string;
  skillLevel: string;
  role: string;
  openTo: string;
  skill1: string;
  skill2: string;
  skill3: string;
  about: string;
  highlightLink1: string;
  highlightTitle1: string;
  highlightLink2: string;
  highlightTitle2: string;
  highlightLink3: string;
  highlightTitle3: string;
  highlightLink4: string;
  highlightTitle4: string;
  ghLink: string;
  liLink: string;
  twLink: string;
}

const initialState: UserState = {
  id: '',
  userName: 'Test',
  userBio: 'This is the test users Bio',
  firstName: 'Charlie',
  lastName: 'Malave',
  city: 'New York, NY',
  skillLevel: 'Senior Developer',
  role: 'Software Engineer @ RediQLess',
  openTo: 'Mentoring',
  skill1: 'React',
  skill2: 'GraphQL',
  skill3: 'NodeJS',
  about: `I’m an experienced software engineer. Most recently, I've lead an engineering team in building a developer tool, RediQLess, a client and server side caching middleware that leverages the power of GraphQL’s declarative query language and Redis’ inimitable caching mechanism.`,
  highlightLink1:
    'https://medium.com/@iankimjudd/introducing-rediqless-a-caching-tool-for-graphql-apis-e4846302f040',
  highlightTitle1: 'RediQLess Medium Article',
  highlightLink2: 'https://charliemalave.com/',
  highlightTitle2: 'Portfolio Website',
  highlightLink3: 'https://anchor.fm/javaunscripted',
  highlightTitle3: 'JavaUnscripted (Podcast)',
  highlightLink4:
    'https://www.canva.com/design/DAEsnmc1EOA/sl6ZPcmhpVmcsKb3mKsHtA/view',
  highlightTitle4: 'Serverless Arcitecture W/AWS Lambda Tech Talk',
  ghLink: 'https://github.com/cmalave13',
  liLink: 'https://www.linkedin.com/in/charlesmalave/',
  twLink: 'https://twitter.com/maxxatlast',
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
    return prof.data.updateProfile;
  } catch (error) {
    console.log('error while updating profile: ', error);
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //make sure whats passed in follows the UserState interface
    // initUser: (state, action: PayloadAction<UserState>) => {
    initUser: (state, action: any) => {
      // Use this once user is logged in and the backend has sent the user details

      // state = action.payload; // This might work instead of below.
      state.id = action.payload.id;
      state.userBio = action.payload.userBio;
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.city = action.payload.city;
      state.skillLevel = action.payload.skillLevel;
      state.role = action.payload.role;
      state.openTo = action.payload.openTo;
      state.skill1 = action.payload.skill1;
      state.skill2 = action.payload.skill2;
      state.skill3 = action.payload.skill3;
      state.about = action.payload.about;
      state.highlightLink1 = action.payload.highlightLink1;
      state.highlightTitle1 = action.payload.highlightTitle1;
      state.highlightLink2 = action.payload.highlightLink2;
      state.highlightTitle2 = action.payload.highlightTitle2;
      state.highlightLink3 = action.payload.highlightLink3;
      state.highlightTitle3 = action.payload.highlightTitle3;
      state.highlightLink4 = action.payload.highlightLink4;
      state.highlightTitle4 = action.payload.highlightTitle4;
      state.ghLink = action.payload.ghLink;
      state.liLink = action.payload.liLink;
      state.twLink = action.payload.twLink;
    },
    updateUser: (state, action: any) => {
      // action.payload;
      state = updateProf(action.payload) as any;

      console.log('from /reducers/user: ', state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, initUser } = userSlice.actions;

export default userSlice.reducer;
