import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthData } from '../../redux/auth-reducer';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setAuthData(id, login, email)
        }
        else console.log(response.data.messages);
      })
  }
  render() {
    return (
      <Header authInfo={this.props.authInfo} />
    )
  }
}

const mapStateToProps = (state) => ({ authInfo: state.authInfo })
export default connect(mapStateToProps, { setAuthData })(HeaderContainer);