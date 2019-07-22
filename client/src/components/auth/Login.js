import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <div className='ui segment'>
        <h2>Sign into your account</h2>
        <form className='ui form' onSubmit={e => onSubmit(e)}>
          <div className='field'>
            <label>Email Address</label>
            <input
              type='email'
              placeholder='Email address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='field'>
            <label>Password</label>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <button type='submit' className='ui primary button' value='Login'>
            Login
          </button>
        </form>
        <p>
          {" "}
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
