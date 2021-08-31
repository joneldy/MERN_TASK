import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const AddTaskButton = ({ openForm }) => {
  return (
    <div className="inline add__task_button">
      <button
        className="btn btn-outline-primary btn-sm"
        onClick={openForm}
        type="button"
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add task</span>
      </button>
    </div>
  );
};

AddTaskButton.propTypes = {
  openForm: PropTypes.func.isRequired,
};

export default AddTaskButton;
