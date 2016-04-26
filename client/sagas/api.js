import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as actions from '../actions/api';
import * as constants from '../constants/api';
import { fetch, delay } from '../../libs/utils/fetch';

function* getArticles(section) {
  yield delay(1000);
  try {
    const result = yield call(fetch, { path: `/sections/${section}/articles`, type: 'GET' });
    yield put(actions.getArticlesSuccess(result));
  } catch(error) {
    yield put(actions.getArticlesFailed(error));
  }
}

export function* watchGetArticles() {
  yield* takeLatest(constants.GET_ARTICLES_REQUEST, getArticles);
}
