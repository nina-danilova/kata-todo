import React, {Component} from "react";
import {formatDistance} from 'date-fns'

import "./task.css";

export default class Task extends Component {

  render() {
    const {description, created, onDoneTask, onDeleteTask, type} = this.props;
    
    const timeDistance = formatDistance(new Date(created), new Date());
/*
    let checked = "false";
    if (type === "completed") {
      checked = "true";
    }*/

    return (
      <>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onDoneTask} /*checked={checked}*/ />
          <label>
            <span className="description">{description}</span>
            <span className="created">{timeDistance}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleteTask}></button>
        </div>
        <input type="text" className="edit" placeholder="Editing task" />
      </>
    );
  };
};