import { fork } from 'redux-saga/effects';
import { watchGetArticles, watchGetSections } from './api';

export default function* root() {
  yield fork(watchGetArticles);
  yield fork(watchGetSections);
}
