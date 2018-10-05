import React, { PureComponent } from "react";
import GoogleLogin from "react-google-login";
import { GOOGLE_KEY } from "utils/constants";
import cookies from "react-cookies";

import CustomButton from "./styles/customButton";
import StyledUser from "./styles/user";

class AuthenticateComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showLogout: false
    };
  }

  _handleSuccessfulLogin(data) {
    this.props.authenticateUser(data);
  }

  _handleUnsuccessfulLogin(data) {
    console.log("Unsuccessful", data);
  }

  render() {
    return this.props.loading ? (
      <StyledUser>Loading...</StyledUser>
    ) : (
      <CustomButton>
        {this.props.user.googleId && (
          <StyledUser
            onClick={() => {
              this.setState({ showLogout: !this.state.showLogout });
            }}
          >
            <img src={this.props.user.imageUrl} /> Hey{" "}
            {this.props.user.name.split(" ")[0]}!
            {this.state.showLogout && (
              <a
                href="#"
                className="logout"
                onClick={e => {
                  e.preventDefault();
                  this.props.updateUser({});
                  cookies.remove("token");
                }}
              >
                Sign Out
              </a>
            )}
          </StyledUser>
        )}

        {!this.props.user.googleId && (
          <GoogleLogin
            clientId={GOOGLE_KEY}
            buttonText={this.props.text}
            onSuccess={this._handleSuccessfulLogin.bind(this)}
            onFailure={this._handleUnsuccessfulLogin.bind(this)}
          />
        )}
      </CustomButton>
    );
  }
}

export default AuthenticateComponent;
