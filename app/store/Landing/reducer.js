import { fromJS } from "immutable";
import {
  CHANGE_EMAIL,
  UPDATE_SPONSORS,
  UPDATE_CATEGORIES,
  UPDATE_LOADING,
  UPDATE_DISCOUNT
} from "./constants";

export const initialState = fromJS({
  email: "",
  sponsors: [],
  categories: [],
  loading: false,
  discount: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set("email", action.email);
    case UPDATE_SPONSORS:
      return state.set("sponsors", action.sponsors);
    case UPDATE_CATEGORIES:
      return state.set("categories", action.categories);
    case UPDATE_LOADING:
      return state.set("loading", action.state);
    case UPDATE_DISCOUNT:
      return state.set("discount", action.discount);
    default:
      return state;
  }
};

export default reducer;
