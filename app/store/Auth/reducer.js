import { fromJS } from 'immutable';
import { UPDATE_LOADING, UPDATE_ACCESS_TOKEN, UPDATE_USER } from './constants';

export const initialState = fromJS({
  loading: true,
  token: false,
  user: {}
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return state.set('loading', action.state);
    case UPDATE_USER:
      return state.set('user', action.user);
    case UPDATE_ACCESS_TOKEN:
      return state.set('accessToken', action.token);
    default:
      return state;
  }
}

export default reducer;
