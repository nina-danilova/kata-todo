import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../task';

import './task-list.css';

export default class TaskList extends Component {
  static defaultProps = {
    visibleTasks: [
      {
        id: 1,
        type: 'active',
        description: 'Example todo',
        created: new Date(1995, 6, 2).getTime(),
      },
    ],
  };

  static propTypes = {
    visibleTasks: PropTypes.arrayOf(PropTypes.object),
    onDoneTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
  };

  render() {
    const { visibleTasks, onDoneTask, onDeleteTask } = this.props;
    const taskList = visibleTasks.map((task) => {
      const { id, type, ...props } = task;

      return (
        <li className={type} key={id}>
          <Task
            {...props}
            onDoneTask={() => onDoneTask(id)}
            onDeleteTask={() => onDeleteTask(id)}
            type={type}
          />
        </li>
      );
    });

    return <ul className="task-list">{taskList}</ul>;
  }
}
