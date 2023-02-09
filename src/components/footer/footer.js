import React, { Component } from "react";

import TasksFilter from "../tasks-filter";

import "./footer.css";

export default class Footer extends Component {

  render() {
    const {onDeleteAllTasks, tasks, filter, onFilterChange} = this.props;

    const todoCount = tasks.filter((task) => task.type !== "completed").length;

    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        <TasksFilter 
          filter={filter}
          onFilterChange={onFilterChange}
        />
        <button 
          className="clear-completed"
          onClick={onDeleteAllTasks}
          >Clear completed</button>
      </footer>
    );
  }
};