import React, {Component} from "react";
import {formatDistanceToNow} from 'date-fns';
import PropTypes from "prop-types";

import "./task.css";

export default class Task extends Component {

  static defaultProps = {
    description: "Описание задачи",
    created: new Date(null),
    type: "completed"
  };

  static propTypes = {
    description: PropTypes.string, 
    created: PropTypes.number, 
    onDoneTask: PropTypes.func.isRequired, 
    onDeleteTask: PropTypes.func.isRequired, 
    type: PropTypes.string
  };

  render() {
    
    const {description, created, onDoneTask, onDeleteTask, type} = this.props;

    const timeDistance = formatDistanceToNow(
      created, 
      {includeSeconds: true}
    );

    let checked = undefined;
    if (type === "completed") {
      checked = true;
    }

    return (
      <>
        <div className="view">
          <input 
            className="toggle" 
            type="checkbox" 
            onClick={onDoneTask} 
            defaultChecked={checked}/>
          <label>
            <span className="description">{description}</span>
            <span className="created">{`created ${timeDistance} ago`}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button 
            className="icon icon-destroy" 
            onClick={onDeleteTask}></button>
        </div>
        <input 
          type="text" 
          className="edit" 
          placeholder="Editing task" />
      </>
    );
  };
};