import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mstp = (state)=>({isAuth: state.authInfo.isAuth});
const withRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };
  return connect(mstp)(RedirectComponent);
};

export default withRedirect;
