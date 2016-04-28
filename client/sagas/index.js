import { fork } from 'redux-saga/effects';
import { watchGetArticles, watchGetSections, watchGetArticle } from './api';

export default function* root() {
  yield fork(watchGetArticles);
  yield fork(watchGetSections);
  yield fork(watchGetArticle);
}
