import React from "react";
import { API_URL } from "utils/constants";
import request from "utils/request";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { makeSelectUser } from "store/Auth/selectors";
import { updateDiscount } from "store/Landing/actions";
import cookie from "react-cookies";

import VoteUp from "components/VoteUp";

import StyledCategory from "./styles/category";
import Title from "./styles/title";
import Item from "./styles/item";
import StyledList from "./styles/list";

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      entries: [],
      loading: true,
      entriesLoading: true
    };

    this.loadCategory = this.loadCategory.bind(this);
    this.loadEntries = this.loadEntries.bind(this);
  }

  componentDidMount() {
    this.loadCategory(this.props.category);
    this.loadEntries(this.props.category);
  }

  componentDidUpdate(newProps) {
    if (newProps.user !== this.props.user) {
      this.loadEntries(this.props.category);
    }
  }

  loadCategory(key) {
    request(`${API_URL}/api/v1/categories/${key}`)
      .then(response => {
        this.setState({ category: response.category, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  loadEntries(category) {
    const token = this.props.user.accessToken || cookie.load("token");
    request(`${API_URL}/api/v1/entries/${category}`, {
      headers: token ? { authorization: token } : {}
    })
      .then(response => {
        if (this.props.onLoaded) {
          this.props.onLoaded();
        }

        this.setState({ entries: response.entries, entriesLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  _handleVote(event, entry) {
    event.stopPropagation();
    if (this.props.user.googleId) {
      request(`${API_URL}/api/v1/vote`, {
        method: "POST",
        headers: {
          authorization: this.props.user.accessToken,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          category: this.props.category,
          entry: entry._id
        })
      })
        .then(() => {
          this.setState({
            entries: this.state.entries.map(oldEntry => {
              if (oldEntry._id === entry._id) {
                if (oldEntry.hasVoted) {
                  return {
                    ...oldEntry,
                    votes: oldEntry.votes - 1,
                    hasVoted: false
                  };
                } else {
                  return {
                    ...oldEntry,
                    votes: oldEntry.votes + 1,
                    hasVoted: true
                  };
                }
              }
              return oldEntry;
            })
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  _handleClick(event, url) {
    event.preventDefault();
    var win = window.open(url, "_blank");
    win.focus();
  }

  render() {
    return !this.state.loading ? (
      <StyledCategory>
        <Title>{this.state.category.name}</Title>
        <StyledList>
          {!this.state.entriesLoading &&
            this.state.entries.map(entry => (
              <Item
                key={entry._id}
                onClick={event => this._handleClick(event, entry.url)}
              >
                <img src={entry.imageUrl} alt={entry.name} />
                <span className="text">
                  {entry.name}
                  {entry.discount && (
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.props.updateDiscount(entry);
                      }}
                    >
                      <img src={require("images/discount.svg")} />
                    </a>
                  )}
                </span>
                <VoteUp
                  voted={entry.hasVoted}
                  auth={this.props.user.googleId}
                  onClick={event => this._handleVote(event, entry)}
                  votes={entry.votes}
                />
              </Item>
            ))}
        </StyledList>
      </StyledCategory>
    ) : null;
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser()
});

const mapDispatchToProps = dispatch => ({
  updateDiscount: discount => dispatch(updateDiscount(discount))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(CategoryComponent);
