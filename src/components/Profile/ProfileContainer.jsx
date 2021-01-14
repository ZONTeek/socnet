import { addPost, updateNewPostText } from '../../redux/profile-reducer';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';


class ProfileContainer extends React.Component {
    componentDidMount(pageId) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${pageId}`)
            .then(response => {
                let data = response.data;
                console.log(data);
            })
    }
    render() {
        <div>
            <Profile />
        </div>
    }
}
let mapStateToProps = {
    state: this.state,
}
export default connect(mapStateToProps, { addPost, updateNewPostText })(Profile);

