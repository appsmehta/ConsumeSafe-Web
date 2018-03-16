import React, { Component } from "react";
import { login, resetPassword, loginWithGoogle } from "../helpers/auth";
import { FontIcon, RaisedButton } from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}

export default class Login extends Component {
  state = { loginMessage: null };
  handleGoogleLogin = e => {
    e.preventDefault();
    loginWithGoogle()
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const TOKEN = result.credential.accessToken;
        console.log("result...", result);

        //TODO: Need to call ConsumeSafe API to store the user details
      })
      .catch(error => {
        this.setState(setErrorMsg("Invalid username/password."));
      });
  };
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() =>
        this.setState(
          setErrorMsg(`Password reset email sent to ${this.email.value}.`)
        )
      )
      .catch(error => this.setState(setErrorMsg(`Email address not found.`)));
  };
  render() {
    const iconStyles = {
      color: "#ffffff"
    };
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Login </h1>
        {/* <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
          <button type="submit" className="btn btn-primary">Login</button>
        </form> */}
         <MuiThemeProvider>
        <RaisedButton
          label="Sign in with Google"
          labelColor={"#ffffff"}
          backgroundColor="#dd4b39"
          onClick={this.handleGoogleLogin} 
        />
        </MuiThemeProvider>
      </div>
    );
  }
}
