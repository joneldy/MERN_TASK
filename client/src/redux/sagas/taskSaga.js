import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  fetchAllTasksApi,
  createTaskApi,
  updateTaskApi,
  deleteTaskApi,
} from '../api';
import {
  // constants
  FETCH_ALL_TASKS,
  FETCH_ALL_TASKS_SUCCESS,
  FETCH_ALL_TASKS_FAILED,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILED,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,

  // actions
  fetchAllTask,
  fetchAllTaskSuccess,
  fetchAllTaskFailed,
  createTaskSuccess,
  createTaskFailed,
  updateTaskSuccess,
  updateTaskFailed,
  deleteTaskSuccess,
  deleteTaskFailed,
  displaySpinner,
  hideSpinner,
} from '../actions';

export function* getTaskFlow({ type, payload }) {
  switch (type) {
    case FETCH_ALL_TASKS:
      try {
        yield put(displaySpinner());
        const resp = yield call(fetchAllTasksApi);
        yield put(
          fetchAllTaskSuccess({
            data: resp.data?.data,
          })
        );
      } catch (err) {
        yield put(
          fetchAllTaskFailed({
            error: err.message,
          })
        );
      }
      break;
    case FETCH_ALL_TASKS_SUCCESS:
      yield put(hideSpinner());
      break;
    case FETCH_ALL_TASKS_FAILED:
      yield put(hideSpinner());
      toast.error(payload.error);
      break;
    default:
      break;
  }
}

export function* createTaskFlow({ type, payload }) {
  switch (type) {
    case CREATE_TASK:
      try {
        yield call(createTaskApi, payload);
        yield put(createTaskSuccess());
      } catch (err) {
        yield put(
          createTaskFailed({
            error: err.message,
          })
        );
      }

      yield put(fetchAllTask());
      break;
    case CREATE_TASK_SUCCESS:
      yield put(hideSpinner());
      toast.success('Task successfully created');
      break;
    case CREATE_TASK_FAILED:
      yield put(hideSpinner());
      toast.error('An error occured while creating a task');
      break;
    default:
      break;
  }
}

export function* updateTaskFlow({ type, payload }) {
  switch (type) {
    case UPDATE_TASK:
      try {
        yield call(updateTaskApi, payload);
        yield put(updateTaskSuccess());
        yield put(fetchAllTask());
      } catch (err) {
        yield put(
          updateTaskFailed({
            error: err.message,
          })
        );
      }
      break;
    case UPDATE_TASK_SUCCESS:
      yield put(hideSpinner());
      toast.success('Task successfully updated');
      break;
    case UPDATE_TASK_FAILED:
      yield put(hideSpinner());
      toast.error('An error occured while updating the task');
      break;
    default:
      break;
  }
}

export function* deleteTaskFlow({ type, payload }) {
  switch (type) {
    case DELETE_TASK:
      try {
        yield call(deleteTaskApi, payload);
        yield put(deleteTaskSuccess());
        yield put(fetchAllTask());
      } catch (err) {
        yield put(
          deleteTaskFailed({
            error: err.message,
          })
        );
      }
      break;
    case DELETE_TASK_SUCCESS:
      yield put(hideSpinner());
      toast.success('Task successfully deleted');
      break;
    case DELETE_TASK_FAILED:
      yield put(hideSpinner());
      toast.error('An error occured while deleting the task');
      break;
    default:
      break;
  }
}

export default function* taskSaga() {
  yield takeLatest(FETCH_ALL_TASKS, getTaskFlow);
  yield takeLatest(FETCH_ALL_TASKS_SUCCESS, getTaskFlow);
  yield takeLatest(FETCH_ALL_TASKS_FAILED, getTaskFlow);

  yield takeLatest(CREATE_TASK, createTaskFlow);
  yield takeLatest(CREATE_TASK_SUCCESS, createTaskFlow);
  yield takeLatest(CREATE_TASK_FAILED, createTaskFlow);

  yield takeLatest(UPDATE_TASK, updateTaskFlow);
  yield takeLatest(UPDATE_TASK_SUCCESS, updateTaskFlow);
  yield takeLatest(UPDATE_TASK_FAILED, updateTaskFlow);

  yield takeLatest(DELETE_TASK, deleteTaskFlow);
  yield takeLatest(DELETE_TASK_SUCCESS, deleteTaskFlow);
  yield takeLatest(DELETE_TASK_FAILED, deleteTaskFlow);
}
