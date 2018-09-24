import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NavBar extends Component {
  handleClick = () => {
    this.props.toggleHamburger(this.props.isActive);
  };

  render() {
    const isHamburgerActive = this.props.isActive
      ? 'navbar-burger burger is-active'
      : 'navbar-burger burger';
    const isMenuActive = this.props.isActive
      ? 'navbar-menu is-active'
      : 'navbar-menu';
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://chrischang.io">
            <img
              src="/stockelizer.svg"
              alt="Stockelizer: a stock visualizer"
              width="112"
              height="28"
            />
          </a>
          <div
            className={isHamburgerActive}
            data-target="navigationBar"
            onClick={this.handleClick}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navigationBar" className={isMenuActive}>
          <div className="navbar-start">{this.props.children}</div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://localhost:4000"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/intent/tweet?text=Check out this awesome stock visualization tool at https://chrischang.io"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter" />
                    </span>
                    <span>Tweet</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    isActive: state.nav.isActive
  };
}

export default connect(
  mapStateToProps,
  actions
)(NavBar);
