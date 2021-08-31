import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './styles.scss';

const TaskList = ({ tasks }) => {
  const emptyElement = (
    <div className="card">
      <div className="card-body text-muted ">There is no task yet!</div>
    </div>
  );

  if (!tasks || tasks.length === 0) return emptyElement;

  return (
    <ul className="list-group">
      {tasks.map((item) => (
        <Task key={item.id} id={item.id} data={item} />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      priority: PropTypes.number,
      completed: PropTypes.bool,
    })
  ).isRequired,
};

export default TaskList;
