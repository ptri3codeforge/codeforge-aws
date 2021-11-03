import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import bulletinPostsReducer from './reducers/bulletinPosts';

export default configureStore({
  reducer: {
    user: userReducer,
    bulletinPosts: bulletinPostsReducer,
  },
});
