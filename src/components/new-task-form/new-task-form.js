import React, { Component } from "react";

import "./new-task-form.css";

export default class NewTaskForm extends Component {

  state = {
    label: ""
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.label !== "") {
      this.props.onItemAdded(this.state.label);
    }
    
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form 
        className="new-task-form" 
        onSubmit={this.onSubmit}>
        <input 
          type="text"
          className="new-todo" 
          placeholder="What needs to be done?" 
          value={this.state.label}
          onChange={this.onLabelChange}
          autoFocus />
      </form>
    );
  };
};