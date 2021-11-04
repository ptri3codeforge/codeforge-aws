import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  subject: string;
  description: string;
  resolved: boolean;
  hashtags: string[];
  posttime: null;
}

// author: "Randy Diebold"
// createdAt: "2021-11-03T23:34:58.994Z"
// description: "test2"
// hashtags: ['test2']
// id: "1a729d51-c28d-47dc-9e44-bf1a121cfcb6"
// posttime: null
// resolved: false
// subject: "test2"
// updatedAt: "2021-11-03T23:34:58.994Z"

const initialState: Post = {
  author: '',
  createdAt: '',
  description: '',
  hashtags: [],
  id: '',
  posttime: null,
  resolved: false,
  subject: '',
  updatedAt: '',
};

export const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState: initialState,
  reducers: {
    updatePost: (state, { payload }: any) => {
      console.log('store slice: ', payload);
      state.author = payload.author;
      state.description = payload.description;
      state.subject = payload.subject;
    },
  },
});

export const { updatePost } = selectedPostSlice.actions;

export default selectedPostSlice.reducer;
