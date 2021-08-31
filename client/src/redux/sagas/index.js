import { all, fork } from 'redux-saga/effects';
import taskSaga from './taskSaga';

export default function* root() {
  yield all([fork(taskSaga)]);
}
