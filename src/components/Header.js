import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <Link to="/feature">Feature</Link>
          <Link to="/signout">Sign Out</Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
