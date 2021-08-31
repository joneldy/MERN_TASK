import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilAlt,
  faTrashAlt,
  faCheckCircle,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { TaskContext } from '../../../context/TaskContext';

const Task = ({ data }) => {
  const { editTask, onDeleteTask } = useContext(TaskContext);
  const { completed } = data;
  return (
    <li className="-item task__list">
      <p className="no-margin checkbox-container">
        {completed ? (
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#198754' }} />
        ) : (
          <FontAwesomeIcon icon={faList} />
        )}
        <label className="inline-block">{data?.title}</label>
      </p>

      <button
        type="button"
        className="btn btn-outline-primary btn-sm edit"
        onClick={() => editTask(data?.id)}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm delete"
        onClick={() => onDeleteTask(data?.id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
};

Task.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.number,
    completed: PropTypes.bool,
  }).isRequired,
};

export default Task;
