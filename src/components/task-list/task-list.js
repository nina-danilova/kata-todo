import React from 'react';
import PropTypes from 'prop-types';

import taskTypes from '../../utilitary/constants';
import Task from '../task';

import './task-list.css';

function TaskList({ visibleTasks = [{}], onDoneTask, onDeleteTask }) {
  const taskList = visibleTasks.map((task) => {
    const {
      id = 1,
      type = taskTypes.completed,
      description = 'Создайте задачу, отредакировав этот текст',
      created = new Date().getTime(),
    } = task;

    return (
      <li className={type} key={id}>
        <Task
          id={id}
          description={description}
          created={created}
          onDoneTask={() => onDoneTask(id)}
          onDeleteTask={() => onDeleteTask(id)}
          type={type}
        />
      </li>
    );
  });

  return <ul className="task-list">{taskList}</ul>;
}

TaskList.propTypes = {
  visibleTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      description: PropTypes.string,
      created: PropTypes.number,
    })
  ).isRequired,
  onDoneTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
