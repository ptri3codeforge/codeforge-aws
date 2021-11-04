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
    initUser: (state, { payload }: PayloadAction<UserState>) => {
      // Use this once user is logged in and the backend has sent the user details

      // state = payload; // This might work instead of below.
      state.id = payload.id;
      state.userBio = payload.userBio;
      state.userName = payload.userName;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.city = payload.city;
      state.skillLevel = payload.skillLevel;
      state.role = payload.role;
      state.openTo = payload.openTo;
      state.skill1 = payload.skill1;
      state.skill2 = payload.skill2;
      state.skill3 = payload.skill3;
      state.about = payload.about;
      state.highlightLink1 = payload.highlightLink1;
      state.highlightTitle1 = payload.highlightTitle1;
      state.highlightLink2 = payload.highlightLink2;
      state.highlightTitle2 = payload.highlightTitle2;
      state.highlightLink3 = payload.highlightLink3;
      state.highlightTitle3 = payload.highlightTitle3;
      state.highlightLink4 = payload.highlightLink4;
      state.highlightTitle4 = payload.highlightTitle4;
      state.ghLink = payload.ghLink;
      state.liLink = payload.liLink;
      state.twLink = payload.twLink;
    },
    updateUser: (state, { payload }: PayloadAction<UserState>) => {
      // payload;
      state = updateProf(payload) as any;

      console.log('from /reducers/user: ', state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, initUser } = userSlice.actions;

export default userSlice.reducer;
