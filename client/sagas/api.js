import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as actions from '../actions/api';
import * as constants from '../constants/api';
import { fetch, delay } from '../../libs/utils/fetch';

function* getArticles(action) {
  yield delay(1000);
  try {
    const result = yield call(fetch, { path: `/sections/${action.section}/articles?limit=5`, type: 'GET' });
    yield put(actions.getArticlesSuccess(result));
  } catch(error) {
    yield put(actions.getArticlesFailed(error));
  }
}
export function* watchGetArticles() {
  yield* takeLatest(constants.GET_ARTICLES_REQUEST, getArticles);
}

function* getSections() {
  yield delay(1000);
  try {
    const result = yield call(fetch, { path: '/sections', type: 'GET' });
    yield put(actions.getSectionsSuccess(result));
  } catch(error) {
    yield put(actions.getSectionsFailed(error));
  }
}
export function* watchGetSections() {
  yield* takeLatest(constants.GET_SECTIONS_REQUEST, getSections);
}
