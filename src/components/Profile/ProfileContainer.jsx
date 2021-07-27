import React from "react";
import {
  addPost,
  updateNewPostText,
  clearProfileData,
  getProfile,
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
//import withRedirect from "../Login/withRedirect";

let userId; 

class ProfileContainer extends React.Component {
  state = { status: "", isMyPage : false };
  componentDidMount() {
    if(this.props.authInfo.userId===this.props.profile.UserProfile.userId) this.setState({isMyPage: true})
    userId = this.props.match.params.userId;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  componentWillUnmount() {
    clearProfileData();
  }
  render() {
    return (
      <div>
        <Profile 
        profile={this.props.profile.UserProfile} 
        status={this.props.profile.status}
        isMyPage={this.state.isMyPage}
        isAuth={this.props.authInfo.isAuth}
        updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({ profile: state.profilePage, authInfo: state.authInfo });

export default compose(
  withRouter,
  connect(mapStateToProps, { addPost, updateNewPostText, getProfile, getStatus, updateStatus })
)(ProfileContainer);
