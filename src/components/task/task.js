import React from "react";
import { formatDistance } from 'date-fns'

import "./task.css";

const Task = ({description, created}) => {
  const timeDistance = formatDistance(new Date(created), new Date());

  return (
    <>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">{timeDistance}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" placeholder="Editing task" />
    </>
  );
};

export default Task;