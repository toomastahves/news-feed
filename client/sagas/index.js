import { fork } from 'redux-saga/effects';
import { watchGetHomeContent } from './api';

export default function* root() {
  yield fork(watchGetHomeContent);
}
