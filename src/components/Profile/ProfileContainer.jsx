import React from "react";
import {
  addPost,
  updateNewPostText,
  clearProfileData,
  requestProfile,
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { getAuth, getProfile } from "../../redux/selectors/profile-selector";

let userId; 

class ProfileContainer extends React.Component {
  state = { status: "", isMyPage : false };
  componentDidMount() {
    if(this.props.authInfo.userId===this.props.profile.UserProfile.userId) this.setState({isMyPage: true})
    userId = this.props.match.params.userId;
    this.props.requestProfile(userId);
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

let mapStateToProps = (state) => ({ profile: getProfile(state), authInfo: getAuth(state) });

export default compose(
  withRouter,
  connect(mapStateToProps, { addPost, updateNewPostText, requestProfile, getStatus, updateStatus })
)(ProfileContainer);
