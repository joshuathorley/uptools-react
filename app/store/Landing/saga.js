import { call, put, takeLatest } from "redux-saga/effects";
import { API_URL } from "utils/constants";
import request from "utils/request";

import { LOAD_SPONSORS, LOAD_CATEGORIES } from "./constants";
import { updateSponsors, updateCategories, updateLoading } from "./actions";

export function* collectSponsors() {
  const requestURL = `${API_URL}/api/v1/sponsors`;
  try {
    const response = yield call(request, requestURL);
    yield put(updateSponsors(response.sponsors));
  } catch (err) {
    console.log(err);
  }
}

export function* collectCategories({ sort }) {
  yield put(updateLoading(true));
  const requestURL = `${API_URL}/api/v1/categories?sort=${sort}`;
  try {
    const response = yield call(request, requestURL);
    yield [
      put(updateCategories(response.categories)),
      put(updateLoading(false))
    ];
  } catch (err) {
    yield put(updateLoading(false));
  }
}

export default function* saga() {
  yield takeLatest(LOAD_SPONSORS, collectSponsors);
  yield takeLatest(LOAD_CATEGORIES, collectCategories);
}
