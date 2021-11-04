import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import bulletinPostsReducer from './reducers/bulletinPosts';
import selectedPostReducer from './reducers/selectedpost';

export default configureStore({
  reducer: {
    user: userReducer,
    bulletinPosts: bulletinPostsReducer,
    selectedPost: selectedPostReducer,
  },
});
