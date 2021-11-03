import React, { useState, useContext } from 'react';
import ProfileContainer from './ProfileContainer';
import { viewContext } from './AppContainer';

import SearchBar from '../Components/SearchBar'
import BoardContainer from './BoardContainer';
import JobContainer from './JobContainer'
import LoginContainer from './LoginContainer';
import PostContainer from './PostContainer';

const DashboardContainer = () => {

  const { view } = useContext<any>(viewContext)

  return (
    <div className="w-full h-full bg-white-default">
     {/* <SidebarContainer />
      <button onClick={() => setView('profile')}>Profile</button>
      {view === 'profile' ? <ProfileContainer /> : ''} */}
      {view === 'profile' && <ProfileContainer />}
      {/* {view === 'bulletin' && <BoardContainer /> } */}
      {view === 'bulletin' ? 
      <div className="flex justify-between"> 
        <div className="w-1/2 bg-blue-light">
          <BoardContainer />
        </div>
        
        <div className="w-1/2 h-screen" >
        <PostContainer />
        </div>

        </div> : ''}
      {view === 'jobs' && <JobContainer />}
      {view === 'login' && <LoginContainer />}

    </div>
  );
};

export default DashboardContainer;
