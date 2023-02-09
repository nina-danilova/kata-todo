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
    ],
    filter: "all"
  };

  createTodoItem = (label) => {
    return {
      id: this.state.taskData.length + 1,
      type: "active",
      description: label,
      created: new Date().getTime()
    }
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({taskData}) => {
      const newData = [...taskData, newItem];

      return {
        taskData: newData
      }
    });
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

  deleteAllTasks = () => {
    this.setState(() => {
      const emptyData = [];

      return {
        taskData: emptyData
      }
    });
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  filter = (tasks, filter) => {
    switch(filter) {
      case "all":
        return tasks;
      case "active":
        return tasks.filter((task) => task.type !== "completed");
      case "completed":
        return tasks.filter((task) => task.type === "completed");
      default:
        return tasks;
    }
  } 

  render() {
    const {taskData, filter} = this.state;
    const visibleTasks = this.filter(taskData, filter);

    return (
      <section className="app">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList 
            visibleTasks={visibleTasks}
            onDoneTask={this.markTaskDone} 
            onDeleteTask={this.deleteTask}/>
          <Footer 
            onDeleteAllTasks={this.deleteAllTasks}
            tasks={taskData}
            filter={filter}
            onFilterChange={this.onFilterChange}
           />
        </section>
      </section>
    );
  };
}
