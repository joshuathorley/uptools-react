import React from "react";
import request from "utils/request";
import { API_URL } from "utils/constants";
import { Link } from "react-router-dom";

import Wrapper from "components/Wrapper";
import H3 from "components/H3";
import H4 from "components/H4";
import P from "components/P";

import StyledFooter from "./styles/footer";
import StyledLinks from "./styles/links";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryAmount: 0
    };

    this._updateEntries = this._updateEntries.bind(this);
  }

  componentDidMount() {
    this._updateEntries();
  }

  _updateEntries() {
    request(`${API_URL}/api/v1/entries/total`)
      .then(response => {
        this.setState({ entryAmount: response.amount });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <StyledFooter light={this.props.light}>
        <Wrapper
          className="footer-wrapper"
          largePadding={this.props.largePadding || false}
        >
          <div className="left-column">
            <H3>Browse {this.state.entryAmount} tools.</H3>
            <P large>
              A project by{" "}
              <a href="https://joshuathorley.com/" target="_blank">
                Joshua
              </a>{" "}
              and{" "}
              <a target="_blank" href="https://jsmth.co">
                Joseph
              </a>
            </P>
            <P top={22}>
              Up.tools isn’t affiliated with any of the companies featured here.
            </P>
            <StyledLinks>
              <li>
                <a
                  href="https://www.dropbox.com/sh/pydexc3417t3ofx/AADoYkJPkBiVx3yPs2LW8tdca?dl=0"
                  target="_blank"
                >
                  Press
                </a>
              </li>
              <li>
                <a href="mailto:hello@up.tools">Suggest a Tool</a>
              </li>
            </StyledLinks>
            <a
              href="https://twitter.com/updottools"
              target="_blank"
              className="social-link"
            >
              <img src={require("images/twitter.svg")} />
            </a>
          </div>
          <div className="right-column">
            <img src={require("images/logo.svg")} alt="Uptools" height={45} />
            <H4>Become a supporter</H4>
            <P top={3} bottom={10}>
              Promote your product on Up.tools and support the project.
            </P>
            <Link to="/supporter">Learn more</Link>
          </div>
        </Wrapper>
      </StyledFooter>
    );
  }
}

export default Footer;
