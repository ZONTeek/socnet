import React from 'react';
import { addPost, updateNewPostText, setUserProfile, clearProfileData } from '../../redux/profile-reducer';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

let userId;

class ProfileContainer extends React.Component {

    componentDidMount() {
        userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                let data = response.data;
                this.props.setUserProfile(data);
            })
    }
    componentWillUnmount() {
        clearProfileData();
    }
    render() {

        if (!this.props.authInfo.isAuth) return <Redirect to="/login" />
        return <div>
            <Profile profile={this.props.profile.UserProfile} />
        </div>
    }
}

let mapStateToProps = (state) => ({ profile: state.profilePage, authInfo: state.authInfo });
let ProfileWithURL = withRouter(ProfileContainer);
export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(ProfileWithURL);

