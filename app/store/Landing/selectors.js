import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectLanding = state => state.get("landing", initialState);

const makeSelectEmail = () =>
  createSelector(selectLanding, state => state.get("email"));

const makeSelectSponsors = () =>
  createSelector(selectLanding, state => state.get("sponsors"));

const makeSelectCategories = () =>
  createSelector(selectLanding, state => state.get("categories"));

const makeSelectLoading = () =>
  createSelector(selectLanding, state => state.get("loading"));

const makeSelectDiscount = () =>
  createSelector(selectLanding, state => state.get("discount"));

export {
  selectLanding,
  makeSelectEmail,
  makeSelectSponsors,
  makeSelectCategories,
  makeSelectLoading,
  makeSelectDiscount
};
