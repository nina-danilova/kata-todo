import React, {Component} from "react";

import Footer from "../footer";
import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";

import "./app.css";

export default class App extends Component {
  state = {
    taskData: [
      {
        id: 1,
        type: "completed",
        description: "Completed task",
        created: new Date(1995, 6, 2).getTime()
      },
      {
        id: 2,
        type: "editing",
        description: "Editing task",
        created: new Date(1987, 1, 11).getTime()
      },
      {
        id: 3,
        type: "active",
        description: "Active task",
        created: new Date(1989, 6, 10).getTime()
      }
    ]
  };

  markTaskDone = (id) => {
    this.setState(({taskData}) => {
      const index = taskData.findIndex((el) => el.id === id);
      const newTaskData = taskData.slice(0);

      if (newTaskData[index].type !== "completed") {
        newTaskData[index].type = "completed";
      } else {
        newTaskData[index].type = "active";
      }
      
      return {
        taskData: newTaskData
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({taskData}) => {
      const index = taskData.findIndex((el) => el.id === id);

      const beforeInd = taskData.slice(0, index);
      const afterInd = taskData.slice(index + 1);
      const newData = [...beforeInd, ...afterInd];

      return {
        taskData: newData
      }
    });
  };

  render() {
    return (
      <section className="todo-app">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={this.state.taskData} onDoneTask={this.markTaskDone} onDeleteTask={this.deleteTask}/>
          <Footer />
        </section>
      </section>
    );
  };
}
