import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div class="form-container">
        <h1 className="title">Sign Up</h1>
        <h2 className="subtitle">{this.props.errorMessage}</h2>
        <br />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              {/* <input className="input" type="email" placeholder="Email" /> */}
              <Field
                className="input"
                name="email"
                placeholder="Email"
                type="text"
                component="input"
                autoComplete="none"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              {/* <input className="input" type="password" placeholder="Password" /> */}
              <Field
                className="input"
                name="password"
                type="password"
                placeholder="Password"
                component="input"
                autoComplete="none"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button type="submit" className="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>
        {/* <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button type="submit">Sign In</button>
        </form> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup);
