import React from 'react';
import * as axios from 'axios';
import User from './User';
import s from './Users.module.css';
import { connect } from 'react-redux';
import { setUsers, setCurrentPage, toggleFollow, toggleFetching } from '../../redux/users-reducer';
import ManyPages from '../common/manyPages';
import Preloader from '../common/Preloader.jsx'


class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.state.currentPage}&count=${this.props.state.userPerPage}`)
      .then(response => {
        let data = response.data;
        this.props.setUsers(data.items, data.totalCount);
        this.props.toggleFetching(false);
      })
  }
  onPageChanged = (page) => {
    this.props.setUsers([])
    this.props.toggleFetching(true);
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${this.props.state.userPerPage}`)
      .then(response => {
        this.props.setUsers(response.data.items, response.data.totalCount);
        this.props.toggleFetching(false);
      })
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
            toggleFollow={this.props.toggleFollow}
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
