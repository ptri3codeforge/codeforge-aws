import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: string;
  author: string;
  subject: string;
  description: string;
  resolved: boolean;
  hashtags: string[];
  posttime: Date;
}

export interface Bulletin {
  posts: Post[];
}

const initialState: Bulletin = {
  posts: [],
};

export const bulletinPostsSlice = createSlice({
  name: 'bulletinPosts',
  initialState: initialState,
  reducers: {
    addPost: (state, { payload }: PayloadAction<Post>) => {
      state.posts = [...state.posts, payload];
    },
  },
});

export const { addPost } = bulletinPostsSlice.actions;

export default bulletinPostsSlice.reducer;
