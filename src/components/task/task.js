import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';

function Task({ id, description, created, onDoneTask, onDeleteTask, type }) {
  const timeDistance = formatDistanceToNow(created, {
    includeSeconds: true,
  });

  const editLabel = `${id}-edit-task`;
  const deleteLabel = `delete task ${id}`;
  const toggleDoneId = `toggle-done-${id}`;
  const editingTaskId = `editing-task-${id}`;

  let checked;
  if (type === 'completed') {
    checked = true;
  }

  return (
    <>
      <div className="view">
        <input id={toggleDoneId} className="toggle" type="checkbox" onClick={onDoneTask} defaultChecked={checked} />
        <label htmlFor={toggleDoneId}>
          <span className="description">{description}</span>
          <span className="created">{`created ${timeDistance} ago`}</span>
        </label>
        <button type="button" className="icon icon-edit" aria-label={editLabel} />
        <button type="button" className="icon icon-destroy" onClick={onDeleteTask} aria-label={deleteLabel} />
      </div>
      <input id={editingTaskId} type="text" className="edit" placeholder="Editing task" aria-label="Editing task" />
    </>
  );
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  onDoneTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Task;
