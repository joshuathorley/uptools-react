import {
  CHANGE_EMAIL,
  LOAD_SPONSORS,
  UPDATE_SPONSORS,
  UPDATE_CATEGORIES,
  LOAD_CATEGORIES,
  UPDATE_LOADING,
  UPDATE_DISCOUNT
} from "./constants";

export const updateEmail = email => ({
  type: CHANGE_EMAIL,
  email
});

export const loadSponsors = () => ({
  type: LOAD_SPONSORS
});

export const loadCategories = sort => ({
  type: LOAD_CATEGORIES,
  sort
});

export const updateSponsors = sponsors => ({
  type: UPDATE_SPONSORS,
  sponsors
});

export const updateCategories = categories => ({
  type: UPDATE_CATEGORIES,
  categories
});

export const updateDiscount = discount => ({
  type: UPDATE_DISCOUNT,
  discount
});

export const updateLoading = state => ({
  type: UPDATE_LOADING,
  state
});
