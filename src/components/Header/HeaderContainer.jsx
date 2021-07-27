import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {logOutTC } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header authInfo={this.props.authInfo} logOutTC={this.props.logOutTC} />
    )
  }
}

const mapStateToProps = (state) => ({ authInfo: state.authInfo })
export default connect(mapStateToProps,  {logOutTC} )(HeaderContainer);