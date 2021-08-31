import axios from '../../axiosInstance';

export const fetchAllTasksApi = () => axios.get('/tasks');
export const createTaskApi = (params) => axios.post('/tasks', params);
export const updateTaskApi = (params) =>
  axios.put(`/tasks/${params.id}`, params);
export const deleteTaskApi = (params) =>
  axios.delete(`/tasks/${params.id}`, params);
