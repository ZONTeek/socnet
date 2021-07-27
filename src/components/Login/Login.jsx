import { useFormik } from "formik";
import React from "react";
import { loginTC } from "../../redux/auth-reducer";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let LoginForm = (props) => {
  const validate = (values) => {
    const errors = {};
    if (!values.login) errors.login = "Login is required";
    else if (values.login.length > 30) errors.login = "Max length reached";
    if (!values.password) errors.password = "Password is required";
    else if (values.password.length > 30)
      errors.password = "Max length reached";
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      rememberMe: false,
    },
    validate,
    onBlur:()=> {formik.setSubmitting(false)},
    onSubmit: (values) => {
      formik.setSubmitting(true);
      let { login, password, rememberMe } = values;
      props.loginTC(login, password, rememberMe);
    },
  });
  console.log(props.authInfo)
  if (props.authInfo.isAuth)
    return <Redirect to={"/profile/" + props.authInfo.userId} />;
  else 
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          className={
            !formik.errors.login
              ? styles.formControl
              : styles.formControl + " " + styles.error
          }
          name={"login"}
          onChange={(e)=> {formik.setSubmitting(false); formik.handleChange(e);}}
          onBlur={formik.handleBlur}
          value={formik.values.login}
          placeholder={"Login"}
          type="text"
        />
        {formik.touched.login && formik.errors.login && (
          <span className={styles.errorMessage}> {formik.errors.login}</span>
        )}
      </div>
      <div>
        <input
          className={
            !formik.errors.password
              ? styles.formControl
              : styles.formControl + " " + styles.error
          }
          name={"password"}
          onChange={(e)=> {formik.setSubmitting(false); formik.handleChange(e);}}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder={"Password"}
          type="password"
        />
        {formik.touched.password && formik.errors.password && (
          <span className={styles.errorMessage}> {formik.errors.password}</span>
        )}
      </div>
      <div>
        remember me{" "}
        <input
          name={"rememberMe"}
          onChange={formik.handleChange}
          value={formik.values.rememberMe}
          type={"checkbox"}
        />
      </div>
      <div>
        <button type={"submit"} disabled={formik.isSubmitting}>Login</button>
      </div>
    {props.authInfo._error&&<span>{props.authInfo._error}</span>}
    </form>
  );
};
LoginForm = connect((state) => ({ authInfo: state.authInfo }), { loginTC })(
  LoginForm
);

const Login = () => {
  return <LoginForm />;
};
export default Login;
