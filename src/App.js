import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
  return (
    <div className='add-wrapper'>
      <HeaderContainer />
      <SidebarContainer />
      <div className={'add-wrapper-content'}>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId' render={() => <ProfileContainer />} />
        <Route path='/news' render={() => <div>News</div>} />
        <Route path='/uudio' render={() => <div>Music</div>} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={()=> <Login/>} />
      </div>
    </div>
  )
}

export { App };
