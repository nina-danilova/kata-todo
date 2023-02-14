import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';

export default class Task extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    onDoneTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };

  render() {
    const {
      description, created, onDoneTask, onDeleteTask, type,
    } = this.props;

    const timeDistance = formatDistanceToNow(created, {
      includeSeconds: true,
    });

    let checked;
    if (type === 'completed') { checked = true; }

    return (
      <>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={onDoneTask}
            defaultChecked={checked}
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">{`created ${timeDistance} ago`}</span>
          </label>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={onDeleteTask} />
        </div>
        <input type="text" className="edit" placeholder="Editing task" />
      </>
    );
  }
}
