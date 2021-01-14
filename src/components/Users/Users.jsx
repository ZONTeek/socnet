import React from 'react';
import * as axios from 'axios';
import User from './User';
import s from './Users.module.css';



class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.state.currentPage}&count=${this.props.state.userPerPage}`)
      .then(response => {
        let data = response.data;
        this.props.setUsers(data.items, data.totalCount);
        this.props.toggleFetching();
      })
  }

  render() {
    let pages = [];
    let pageCount = Math.ceil(this.props.totalCount / this.props.userPerPage);
    for (let i = 0; i <= pageCount; i++) { this.pages.push(i); }
    return <div className={s.users}>
      {this.props.state.users.map(u => {
        return <User
          key={u.id}
          userInfo={u}
          toggleFollow={this.props.toggleFollow}
        />
      })}
      {pages.map(p => {
        return <span key={p}
          onClick={() => this.props.setCurrentPage(p)}>
          {p}
        </span>
      })}
    </div>
  }
}

export default Users;