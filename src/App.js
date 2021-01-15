import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  return (
    <div className='add-wrapper'>
      <Header />
      <SidebarContainer />
      <div className={'add-wrapper-content'}>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId' render={() => <ProfileContainer />} />
        <Route path='/news' render={() => <div>News</div>} />
        <Route path='/Audio' render={() => <div>Music</div>} />
        <Route path='/Users' render={() => <UsersContainer />} />
      </div>
    </div>
  )
}

export { App };
