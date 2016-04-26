import { fork } from 'redux-saga/effects';
import { watchGetArticles } from './api';

export default function* root() {
  yield fork(watchGetArticles);
}
