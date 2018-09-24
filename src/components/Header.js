import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './Navbar';
import './Header.css';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <Link className="navbar-item" to="/feature">
            Feature
          </Link>
          <Link className="navbar-item" to="/signout">
            Sign Out
          </Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Link className="navbar-item" to="/signup">
            Sign Up
          </Link>
          <Link className="navbar-item" to="/signin">
            Sign In
          </Link>
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <NavBar>
        <Link className="navbar-item" to="/">
          Home
        </Link>
        {this.renderLinks()}
      </NavBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
