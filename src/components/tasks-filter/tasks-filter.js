import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

export default class TasksFilter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

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
      const isSelected = filter === name; /* вернет true для подходящей кнопки */
      const selectedClass = isSelected ? ' selected' : '';

      return (
        <li key={name}>
          <button
            className={selectedClass}
            onClick={() => onFilterChange(name)}
          >
            {label}
          </button>
        </li>
      );
    });

    return <ul className="tasks-filter">{filterTabs}</ul>;
  }
}
