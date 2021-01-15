import { addPost, updateNewPostText, setUserProfile } from '../../redux/profile-reducer';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount(pageId) {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                let data = response.data;
                this.props.setUserProfile(data);
            })
    }
    render() {
        return <div>
            <Profile profile={this.props.profile.UserProfile} />
        </div>
    }
}

let mapStateToProps = (state) => ({ profile: state.profilePage });
let ProfileWithURL = withRouter(ProfileContainer);
export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(ProfileWithURL);

