import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './tasks-filter.css';

export default class TasksFilter extends Component {
  filters = [
    {
      name: 'all',
      label: 'All',
    },
    {
      name: 'active',
      label: 'Active',
    },
    {
      name: 'completed',
      label: 'Completed',
    },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const filterTabs = this.filters.map(({ name, label }) => {
      const selClass = classNames({
        selected: filter === name,
      });

      return (
        <li key={name}>
          <button className={selClass} type="button" onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });

    return <ul className="tasks-filter">{filterTabs}</ul>;
  }
}

TasksFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
