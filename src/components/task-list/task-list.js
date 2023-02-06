import React, {Component} from "react";

import Task from "../task";

import "./task-list.css";

export default class TaskList extends Component {

  render() {
    const {tasks, onDoneTask, onDeleteTask} = this.props;
    const taskList = tasks.map((task) => {
      const {id, type, ...props} = task;
  
      return (
        <li className={type} key={id}>
          <Task {...props} onDoneTask={() => onDoneTask(id)} onDeleteTask={() => onDeleteTask(id)} type={type} />
        </li>
      );
    });
    
    return (
      <ul className="todo-list">
        {taskList}
      </ul>
    );
  };
};