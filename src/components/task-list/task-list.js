import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task';

import './task-list.css';

function TaskList({ visibleTasks, onDoneTask, onDeleteTask }) {
  const taskList = visibleTasks.map((task) => {
    const { id, type, description, created } = task;

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

TaskList.defaultProps = {
  visibleTasks: [
    {
      id: 1,
      type: 'active',
      description: 'Создайте задачу, отредакировав этот текст',
      created: new Date(null).getTime(),
    },
  ],
};

TaskList.propTypes = {
  visibleTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      description: PropTypes.string,
      created: PropTypes.instanceOf(Date),
    })
  ),
  onDoneTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
