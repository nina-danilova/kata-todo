import React from "react";

import Task from "../task";

import "./task-list.css";

const TaskList = ({tasks}) => {
  const taskList = tasks.map((task) => {
    const {id, type, ...props} = task;

    return (
      <li className={type} key={id}>
        <Task {...props}/>
      </li>
    );
  });
  
  return (
    <ul className="todo-list">
      {taskList}
    </ul>
  );
};

export default TaskList;