import React from 'react';
import { addPost, updateNewPostText, setUserProfile, clearProfileData } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import {compose} from 'redux';
import Profile from './Profile';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import withRedirect from '../Login/withRedirect';

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
        return <div>
            <Profile profile={this.props.profile.UserProfile} />
        </div>
    }
}

let mapStateToProps = (state) => ({ profile: state.profilePage });

export default compose(
    withRedirect,withRouter,
    connect(mapStateToProps,{addPost, updateNewPostText, setUserProfile }))
    (ProfileContainer);

