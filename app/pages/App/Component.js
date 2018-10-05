import React, { PureComponent } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import cookie from "react-cookies";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Confetti from "react-dom-confetti";

import Landing from "pages/Landing/Loadable";
import Supporter from "pages/Supporter/Loadable";
import NotFound from "pages/NotFound/Loadable";

import H1 from "components/H1";
import P from "components/P";
import Modal from "./styles/modal";

const config = {
  angle: 90,
  spread: 180,
  startVelocity: 45,
  elementCount: 80,
  decay: 0.93,
  colors: ["#FF3E00", "#5700FF", "#191919"]
};

class RootComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      confetti: false
    };
  }

  componentDidMount() {
    const token = cookie.load("token");
    if (token) {
      setTimeout(() => {
        this.props.updateAccessToken(token);
      }, 1000);
    } else {
      setTimeout(() => {
        this.props.updateLoading(false);
      }, 1000);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.discount && this.props.discount) {
      setTimeout(() => {
        this.setState({ confetti: true });
      }, 200);
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/supporter" component={Supporter} />
          <Route path="" component={NotFound} />
        </Switch>
        {this.props.discount && (
          <Modal.Background
            onClick={() => {
              this.setState({ confetti: false });
              this.props.updateDiscount(false);
            }}
          >
            <div className="confetti">
              <Confetti active={this.state.confetti} config={config} />
            </div>
            <Modal.Content
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <H1>Wait, you’re in luck!</H1>
              <P large>Use this exclusive discount to save on your new tool…</P>
              <Modal.Ticket>
                <div className="text">
                  <div className="product">
                    <img src={this.props.discount.imageUrl} />
                    <div className="title">{this.props.discount.name}</div>
                  </div>
                  <P>Get {this.props.discount.discount.text}</P>
                </div>

                {this.props.discount.discount.code && (
                  <div className="buttons">
                    <div className="button dull">
                      {this.props.discount.discount.code}
                    </div>
                    <CopyToClipboard
                      className="button"
                      text={this.props.discount.discount.code}
                      onCopy={() => {
                        this.setState({ copied: true });
                        var win = window.open(
                          this.props.discount.url,
                          "_blank"
                        );
                        win.focus();
                      }}
                    >
                      <span>
                        {this.state.copied
                          ? "Copied!"
                          : "Copy Code and Continue"}
                      </span>
                    </CopyToClipboard>
                  </div>
                )}

                {this.props.discount.discount.link && (
                  <div className="buttons">
                    <P>Discount will be auto applied at checkout.</P>
                    <a
                      className="button"
                      target="_blank"
                      href={this.props.discount.discount.link}
                    >
                      Continue
                    </a>
                  </div>
                )}
              </Modal.Ticket>
            </Modal.Content>
          </Modal.Background>
        )}
      </div>
    );
  }
}

export default withRouter(RootComponent);
