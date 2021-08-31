import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import spinnerReducer from './spinnerReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  spinner: spinnerReducer,
});

export default rootReducer;
