import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as actions from '../actions/';
import * as constants from '../constants/';
import { fetch, delay } from '../../libs/utils/fetch';

function* getHomeContent() {
  yield delay(1000);
  try {
    const result = yield call(fetch, { path: '/home', type: 'GET' });
    yield put(actions.getHomeSuccess(result));
  } catch(error) {
    yield put(actions.getHomeFailed(error));
  }
}

export function* watchGetHomeContent() {
  yield* takeLatest(constants.GET_HOME_CONTENT_REQUEST, getHomeContent);
}
