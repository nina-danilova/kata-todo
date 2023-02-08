import React, { Component } from "react";

import "./tasks-filter.css";

export default class TasksFilter extends Component {


  render() {
    const {tasks} = this.props;

    return (
      <ul className="tasks-filter">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    );
  };
};