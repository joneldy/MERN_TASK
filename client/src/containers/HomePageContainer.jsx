import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskContext } from '../context/TaskContext';
import TaskFilter from '../components/TaskFilter';
import AddTaskButton from '../components/AddTaskButton';
import TaskList from '../components/TaskList';
import ModalForm from '../components/ModalForm';
import { getAllTasksData } from '../redux/selectors';
import { fetchAllTask, deleteTask } from '../redux/actions';
import { VISIBILITY_FILTERS, SORT_BY } from '../constants';

const HomePageContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getAllTasksData) || [];
  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState({});
  const handleCloseForm = () => setShowForm(false);
  const handleOpenForm = () => setShowForm(true);
  const [filter, setFilter] = useState(VISIBILITY_FILTERS.ALL);
  const [sort, setSort] = useState(SORT_BY.TITLE);

  useEffect(() => {
    dispatch(fetchAllTask());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeFilter = (name) => setFilter(name);
  const onChangeSort = (name) => setSort(name);

  const editTask = (id) => {
    const result = tasks.find((item) => item.id === id);
    setTask(result);
    setShowForm(true);
  };

  const resetTask = () => setTask({});

  const onDeleteTask = (id) => {
    const result = tasks.find((item) => item.id === id);
    const isDelete = confirm(
      `Area you sure you want to delete this task? ${result.title}`
    );
    if (isDelete) {
      dispatch(deleteTask({ id }));
    }
  };

  const handleSort = (option, results) => {
    if (option === SORT_BY.PRIORITY) {
      return results.sort((a, b) => a.priority - b.priority).reverse();
    }
    return results.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  };

  const handleFilter = (tasks, filterVar) => {
    let results = [];

    switch (filterVar) {
      case VISIBILITY_FILTERS.COMPLETED:
        results = tasks.filter(({ completed }) => completed === true);
        return handleSort(sort, results);
      case VISIBILITY_FILTERS.INCOMPLETE:
        results = tasks.filter(({ completed }) => completed !== true);
        return handleSort(sort, results);
      default:
        return handleSort(sort, tasks);
    }
  };

  const Filtertasks = handleFilter(tasks, filter);

  return (
    <TaskContext.Provider
      value={{
        filter,
        sortName: sort,
        editTask,
        resetTask,
        onDeleteTask,
        onChangeFilter,
        onChangeSort,
      }}
    >
      <div className="home">
        <div className="container">
          <TaskFilter />
          <AddTaskButton openForm={handleOpenForm} />
          <TaskList tasks={Filtertasks} />
        </div>
        <ModalForm
          task={task}
          showForm={showForm}
          closeForm={handleCloseForm}
        />
      </div>
    </TaskContext.Provider>
  );
};

export default HomePageContainer;
