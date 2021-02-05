import React from 'react';
import User from './User';
import s from './Users.module.css';
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, toggleFollow, toggleFetching } from '../../redux/users-reducer';
import ManyPages from '../common/manyPages';
import Preloader from '../common/Preloader.jsx'
import { followUser, getUsers, unfollowUser } from '../../api/api';


class Users extends React.Component {
  componentDidMount() {
    getUsers(this.props.state.currentPage, this.props.state.userPerPage)
      .then(data => {
        this.props.setUsers(data.items, data.totalCount);
        this.props.toggleFetching(false);
      })
  }
  onPageChanged = (page) => {
    this.props.setUsers([])
    this.props.toggleFetching(true);
    this.props.setCurrentPage(page);
    getUsers(this.props.state.currentPage, this.props.state.userPerPage)
      .then(data => {
        this.props.setUsers(data.items, data.totalCount);
        this.props.toggleFetching(false);
      })
  }
  onToggleFollow = (userId, isUserFollowed) => {
    if (!isUserFollowed) {
      followUser(userId)
        .then(data => {
          data.resultCode === 0 ? this.props.toggleFollow(userId) : console.log(data.messages);
        })
    } else {
      unfollowUser(userId)
        .then(data => {
          data.resultCode === 0 ? this.props.toggleFollow(userId) : console.log(data.messages);
        })

    }
  }
  render() {
    let pages = [];
    let pageCount = Math.ceil(this.props.state.usersTotalCount / this.props.state.userPerPage);
    for (let i = 1; i <= pageCount; i++) { pages.push(i); }
    return <>
      <div className={s.preloader}>{this.props.state.isFetching ? <Preloader /> : null}</div>
      <div className={s.users}>
        {this.props.state.users.map(u => {
          return <User
            key={u.id}
            userInfo={u}
            onToggleFollow={this.onToggleFollow}
          />
        })}
      </div>
      <div >
        {
          ManyPages(this.props.state.currentPage, pageCount, this.onPageChanged, pages)
        }
      </div>
    </>
  }
}


let mapStateToProps = (state) => ({ state: state.usersPage })
export default connect(mapStateToProps, { setUsers, setCurrentPage, toggleFollow, toggleFetching })(Users);
