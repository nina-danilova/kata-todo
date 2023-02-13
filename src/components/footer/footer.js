import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../tasks-filter';

import './footer.css';

export default class Footer extends Component {
  static defaultProps = {
    tasks: [
      {
        id: 2,
        type: 'completed',
        description: 'Example todo',
        created: new Date(1995, 6, 2).getTime(),
      },
    ],
    filter: 'completed',
  };

  static propTypes = {
    onDeleteAllTasks: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
    onFilterChange: PropTypes.func.isRequired,
  };

  render() {
    const {
      onDeleteAllTasks, tasks, filter, onFilterChange,
    } = this.props;

    const todoCount = tasks.filter((task) => task.type !== 'completed').length;

    return (
      <footer className="footer">
        <span className="todo-count">
          {todoCount}
          {' '}
          items left
        </span>
        <TasksFilter filter={filter} onFilterChange={onFilterChange} />
        <button className="clear-completed" onClick={onDeleteAllTasks}>
          Clear completed
        </button>
      </footer>
    );
  }
}
