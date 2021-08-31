import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { TaskContext } from '../../context/TaskContext';
import { displaySpinner, createTask, updateTask } from '../../redux/actions';
import './styles.scss';

const ModalForm = ({ task, showForm, closeForm }) => {
  const dispatch = useDispatch();
  const { resetTask } = useContext(TaskContext);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('title is required'),
    description: Yup.string().required('description is required'),
    priority: Yup.number().required('priority is required'),
  });

  return (
    <div>
      <Modal show={showForm} onHide={closeForm} className="add-form">
        <Formik
          initialValues={{
            title: task?.title || '',
            description: task?.description || '',
            priority: task?.priority || '',
            completed: task?.completed || false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(displaySpinner());
            if (task?.id) {
              dispatch(updateTask({ ...values, id: task?.id }));
            } else {
              dispatch(createTask(values));
            }
            resetTask();
            closeForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>{task?.id ? 'Update' : 'Save'} Task</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="mb-3">
                  <label className="form-label">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {errors.title && touched.title && (
                    <p className="feedback-error">{errors.title}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Description:</label>
                  <textarea
                    className="form-control description"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  {errors.description && touched.description && (
                    <p className="feedback-error">{errors.description}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Priority
                  </label>
                  <input
                    type="number"
                    className="form-control mb-2 prio"
                    min="1"
                    name="priority"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.priority}
                  />

                  {errors.priority && touched.priority && (
                    <p className="feedback-error">{errors.priority}</p>
                  )}
                  <small className="form-text text-muted">
                    Number should be higher to become priority
                  </small>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="completed"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value
                      checked={values.completed}
                    />
                    <label className="form-check-label">Mark as complete</label>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary btn-sm"
                  onClick={() => {
                    resetTask();
                    closeForm();
                  }}
                >
                  Close
                </Button>
                <Button variant="primary btn-sm" type="submit">
                  {task?.id ? 'Update' : 'Save'}
                </Button>
              </Modal.Footer>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
ModalForm.defaultProps = {
  task: {},
};
ModalForm.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.number,
    completed: PropTypes.bool,
  }),
  showForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default ModalForm;
