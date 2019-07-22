import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const { name, email, password, passwordConfirmation } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setAlert("passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <div className='ui segment'>
        <h2>Create an account</h2>
        <form className='ui form' onSubmit={e => onSubmit(e)}>
          <div className='field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='name'
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='field'>
            <label>Email Address</label>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='field'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='field'>
            <label>Confirm Password</label>
            <input
              type='password'
              name='passwordConfirmation'
              placeholder='Password Confirmation'
              value={passwordConfirmation}
              onChange={e => onChange(e)}
            />
          </div>

          <button className='ui primary button' type='submit'>
            Submit
          </button>
        </form>
        <p>
          {" "}
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  alerts: state.alert,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
