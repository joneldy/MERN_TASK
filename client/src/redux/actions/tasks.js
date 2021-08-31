export const FETCH_ALL_TASKS = 'FETCH_ALL_TASKS';
export const FETCH_ALL_TASKS_SUCCESS = 'FETCH_ALL_TASKS_SUCCESS';
export const FETCH_ALL_TASKS_FAILED = 'FETCH_ALL_TASKS_FAILED';

export const CREATE_TASK = 'CREATE_TASK';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILED = 'CREATE_TASK_FAILED';

export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILED = 'UPDATE_TASK_FAILED';

export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILED = 'DELETE_TASK_FAILED';

export const fetchAllTask = () => {
  return {
    type: FETCH_ALL_TASKS,
  };
};

export const fetchAllTaskSuccess = (payload) => {
  return {
    type: FETCH_ALL_TASKS_SUCCESS,
    payload,
  };
};

export const fetchAllTaskFailed = (payload) => {
  return {
    type: FETCH_ALL_TASKS_SUCCESS,
    payload,
  };
};

export const createTask = (payload) => {
  return {
    type: CREATE_TASK,
    payload,
  };
};

export const createTaskSuccess = () => {
  return {
    type: CREATE_TASK_SUCCESS,
  };
};

export const createTaskFailed = (payload) => {
  return {
    type: CREATE_TASK_FAILED,
    payload,
  };
};

export const updateTask = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};

export const updateTaskSuccess = () => {
  return {
    type: UPDATE_TASK_SUCCESS,
  };
};

export const updateTaskFailed = (payload) => {
  return {
    type: UPDATE_TASK_FAILED,
    payload,
  };
};

export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const deleteTaskSuccess = () => {
  return {
    type: DELETE_TASK_SUCCESS,
  };
};

export const deleteTaskFailed = (payload) => {
  return {
    type: DELETE_TASK_FAILED,
    payload,
  };
};
