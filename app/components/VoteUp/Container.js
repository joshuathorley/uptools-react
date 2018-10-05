import React from "react";
import ReactTooltip from "react-tooltip";

import StyledVote from "./styles/vote";

class Vote extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mouseOff: true
    };
  }

  _handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ mouseOff: false });
    this.props.onClick(event);
  }

  _handleMouseOff() {
    if (!this.state.mouseOff) {
      this.setState({ mouseOff: true });
    }
  }

  render() {
    return (
      <div>
        {this.props.auth ? (
          <StyledVote
            voted={this.props.voted}
            auth={this.props.auth}
            onClick={this._handleClick.bind(this)}
            onMouseLeave={this._handleMouseOff.bind(this)}
            className={this.state.mouseOff ? "mouseOff" : ""}
          >
            <img src={require("images/vote.svg")} alt="Vote" />
            {this.props.votes}
          </StyledVote>
        ) : (
          <StyledVote
            voted={this.props.voted}
            auth={this.props.auth}
            onClick={this._handleClick.bind(this)}
            onMouseLeave={this._handleMouseOff.bind(this)}
            className={this.state.mouseOff ? "mouseOff" : ""}
            data-tip="<p>Sign in to vote.</p>"
          >
            <img src={require("images/vote.svg")} alt="Vote" />
            {this.props.votes}
          </StyledVote>
        )}
        <ReactTooltip html />
      </div>
    );
  }
}

export default Vote;
