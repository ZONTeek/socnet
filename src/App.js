import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import {initialize} from "./redux/app-reducer"
import Preloader from "./components/common/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if(!this.props.initialized) return <Preloader/>
    return (
      <div className="add-wrapper">
        <HeaderContainer />
        <SidebarContainer />
        <div className={"add-wrapper-content"}>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId" render={() => <ProfileContainer />} />
          <Route path="/news" render={() => <div>News</div>} />
          <Route path="/audio" render={() => <div>Music</div>} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
   connect((state)=> ({initialized: state.app.initialized}), {initialize})) 
   (App);
