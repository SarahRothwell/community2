import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <a onClick={logout} href='#!' className='item'>
        {" "}
        Logout
      </a>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to='/Register' className='item'>
        {" "}
        Register
      </Link>
      <Link to='/Login' className='item'>
        {" "}
        Login
      </Link>
    </Fragment>
  );

  return (
    <nav className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        {" "}
        LOGO
      </Link>
      <Link to='/Blog' className='item'>
        {" "}
        Resources
      </Link>
      <Link to='/' className='item'>
        {" "}
        Our Stories
      </Link>
      <Link to='/Support' className='item'>
        {" "}
        Support
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
