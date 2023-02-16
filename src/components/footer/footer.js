import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../tasks-filter';

import './footer.css';

function Footer({ onDeleteCompleteTasks, tasks, filter, onFilterChange }) {
  const todoCount = tasks.filter((task) => task.type !== 'completed').length;

  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" type="button" onClick={onDeleteCompleteTasks}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  tasks: [],
  filter: 'all',
};

Footer.propTypes = {
  onDeleteCompleteTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      description: PropTypes.string,
      created: PropTypes.number,
    })
  ),
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

export default Footer;
