import { AUTHENTICATE_USER, UPDATE_ACCESS_TOKEN, UPDATE_LOADING, UPDATE_USER } from './constants';

export const authenticateUser = (token) => ({
  type: AUTHENTICATE_USER,
  token
});

export const updateAccessToken = (token) => ({
  type: UPDATE_ACCESS_TOKEN,
  token
});

export const updateLoading = (state) => ({
  type: UPDATE_LOADING,
  state
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user
});
