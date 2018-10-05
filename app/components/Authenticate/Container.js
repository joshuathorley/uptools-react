import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { authenticateUser, updateUser } from "store/Auth/actions";
import { makeSelectLoading, makeSelectUser } from "store/Auth/selectors";
import reducer from "store/Auth/reducer";
import saga from "store/Auth/saga";
import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import AuthenticateComponent from "./Component";

const AuthenticateContainer = props => <AuthenticateComponent {...props} />;

export const mapDispatchToProps = dispatch => ({
  authenticateUser: token => dispatch(authenticateUser(token)),
  updateUser: user => dispatch(updateUser(user))
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  user: makeSelectUser()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: "auth", reducer });
const withSaga = injectSaga({ key: "auth", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AuthenticateContainer);
