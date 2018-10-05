import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectState = state => state.get('auth', initialState);

const makeSelectUser = () =>
  createSelector(selectState, state => state.get('user'));

const makeSelectLoading = () =>
  createSelector(selectState, state => state.get('loading'));

export {
  selectState,
  makeSelectLoading,
  makeSelectUser
};
