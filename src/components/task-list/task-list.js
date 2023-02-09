import React, {Component} from "react";

import Task from "../task";

import "./task-list.css";

export default class TaskList extends Component {

  render() {
    const {onDoneTask, onDeleteTask, visibleTasks} = this.props;
    const taskList = visibleTasks.map((task) => {
      const {id, type, ...props} = task;
  
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
    
    return (
      <ul className="task-list">
        {taskList}
      </ul>
    );
  };
};