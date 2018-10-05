import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { updateAccessToken, updateLoading } from "store/Auth/actions";

import RootComponent from "./Component";
import { makeSelectDiscount } from "../../store/Landing/selectors";
import { updateDiscount } from "../../store/Landing/actions";

const RootContainer = props => <RootComponent {...props} />;

export const mapDispatchToProps = dispatch => ({
  updateAccessToken: token => dispatch(updateAccessToken(token)),
  updateLoading: state => dispatch(updateLoading(state)),
  updateDiscount: discount => dispatch(updateDiscount(discount))
});

const mapStateToProps = createStructuredSelector({
  discount: makeSelectDiscount()
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default withRouter(compose(withConnect)(RootContainer));
