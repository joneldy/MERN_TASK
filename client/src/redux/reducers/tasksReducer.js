import {
  FETCH_ALL_TASKS,
  FETCH_ALL_TASKS_SUCCESS,
  FETCH_ALL_TASKS_FAILED,
} from '../actions';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_TASKS:
      return {
        ...state,
        data: [],
        error: '',
        loading: true,
      };
    case FETCH_ALL_TASKS_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: '',
      };
    case FETCH_ALL_TASKS_FAILED:
      return {
        data: [],
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default TasksReducer;
