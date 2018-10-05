import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URL } from 'utils/constants';
import request from 'utils/request';
import cookie from 'react-cookies';

import { AUTHENTICATE_USER, UPDATE_ACCESS_TOKEN } from './constants';
import { updateLoading, updateAccessToken, updateUser } from './actions';

export function* getAuthedUser({ token }) {
  yield put(updateLoading(true));
  const requestURL = `${API_URL}/api/v1/auth`;
  try {
    const response = yield call(request, requestURL, {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        token
      })
    });
    
    yield [
      put(updateAccessToken(response.user.accessToken)),
      put(updateLoading(false))
    ];

    cookie.save('token', response.user.accessToken);
  } catch (err) {
    console.log(err);
    yield put(updateLoading(false));
  }
}

export function* collectUserInfo ({ token }) {
  yield put(updateLoading(true));
  const requestURL = `${API_URL}/api/v1/auth`;

  try {
    const response = yield call(request, requestURL, {
      headers: {
        'content-type': 'application/json',
        'authorization': token
      }
    });

    yield [
      put(updateUser(response.user)),
      put(updateLoading(false))
    ];
  } catch (err) {
    console.log(err);
    cookie.remove('token');
    yield put(updateLoading(false));
  }
}

export default function* saga () {
  yield takeLatest(AUTHENTICATE_USER, getAuthedUser);
  yield takeLatest(UPDATE_ACCESS_TOKEN, collectUserInfo);
}
