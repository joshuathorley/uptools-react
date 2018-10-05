import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import Masonry from "react-masonry-component";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import ReactTags from "react-tag-autocomplete";

import { makeSelectUser } from "store/Auth/selectors";
import {
  makeSelectSponsors,
  makeSelectCategories
} from "store/Landing/selectors";
import { loadSponsors, loadCategories } from "store/Landing/actions";
import reducer from "store/Landing/reducer";
import saga from "store/Landing/saga";
import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";

import Wrapper from "components/Wrapper";
import Footer from "components/Footer";
import Authenticate from "components/Authenticate";
import Sponsor from "components/Sponsor";
import Category from "components/Category";
import H1 from "components/H1";
import P from "components/P";
import Illo from "components/Illo";

import Hero from "./styles/hero";
import Sponsors from "./styles/sponsors";
import Categories from "./styles/categories";
import WhiteArea from "./styles/white";
import { makeSelectLoading } from "../../store/Landing/selectors";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

class LandingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesLoaded: 0,
      tags: [],
      sort: "popular"
    };
  }

  componentDidMount() {
    this.props.loadSponsors();
    this.props.loadCategories(this.state.sort);
  }

  handleDelete(i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  }

  handleAddition(tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  render() {
    return (
      <div>
        <WhiteArea>
          <Wrapper>
            <Link to="/">
              <img
                src={require("images/logo.svg")}
                alt="Up Tools"
                style={{ marginTop: "66px" }}
              />
            </Link>
            <Hero>
              <Illo />
              <H1 style={{ maxWidth: 870 }}>
                The best tools for people like you, as voted for by people like
                you.
              </H1>
              <P bottom={56} large>
                It’s easy to get lost in the mind-boggling universe of tools
                that help you do your job. Cut through the bullshit and find the
                best ones, that your peers are already using.
              </P>
              <Authenticate text="Sign in with Google" />
              <P small top={16} className="small">
                {this.props.user.googleId
                  ? "You’re signed in, so you can vote for your favorites and gain access to exclusive offers and discounts."
                  : "If you sign in, you’ll be able to vote for your favorites and gain access to exclusive offers and discounts."}
              </P>
            </Hero>
          </Wrapper>
        </WhiteArea>
        <Wrapper>
          <Sponsors>
            {this.props.sponsors.map(sponsor => (
              <Sponsor key={sponsor._id} sponsor={sponsor} />
            ))}
            <div className="info">
              <div
                className="text"
                data-tip="<p>The tools below are there because people like you suggested them. The lovely people at the above companies help support us.</p>"
              >
                <Link to="/supporter">
                  <img src={require("../../images/info.svg")} /> What are these?
                </Link>
              </div>
            </div>
          </Sponsors>
          {this.props.loading &&
          (this.state.categoriesLoaded === this.props.categories.length ||
            this.state.tags.length > 0) ? (
            <div />
          ) : (
            <div>
              <div className="filter">
                <ReactTags
                  tags={this.state.tags}
                  suggestions={
                    this.props.categories.length > 0
                      ? this.props.categories.map(cat => ({
                          name: toTitleCase(cat.category.replace("-", " ")),
                          key: cat.category
                        }))
                      : []
                  }
                  autofocus={false}
                  placeholder="Search for tools and categories"
                  handleDelete={this.handleDelete.bind(this)}
                  handleAddition={this.handleAddition.bind(this)}
                />

                <div className="sortCont">
                  <div className="title">Sort by:</div>
                  <select
                    className="select"
                    value={this.state.sort}
                    onChange={e => {
                      this.setState({ sort: e.target.value });
                      this.props.loadCategories(e.target.value);
                    }}
                  >
                    <option value={"popular"}>Popular</option>
                    <option value={"az"}>A-Z</option>
                  </select>
                </div>
              </div>
              <Masonry
                options={{
                  transitionDuration: 0,
                  columnWidth: 474,
                  gutter: 72
                }}
              >
                {this.state.tags.length > 0
                  ? this.state.tags.map(category => (
                      <Category key={category.key} category={category.key} />
                    ))
                  : this.props.categories.map(category => (
                      <Category
                        key={category.category}
                        category={category.category}
                        onLoaded={() => {
                          this.setState({
                            categoriesLoaded: this.state.categoriesLoaded + 1
                          });
                        }}
                      />
                    ))}
              </Masonry>
            </div>
          )}
        </Wrapper>
        <Footer />
        <ReactTooltip html />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  loadSponsors: () => dispatch(loadSponsors()),
  loadCategories: sort => dispatch(loadCategories(sort))
});

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  sponsors: makeSelectSponsors(),
  categories: makeSelectCategories(),
  loading: makeSelectLoading()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: "landing", reducer });
const withSaga = injectSaga({ key: "landing", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(LandingComponent);
