import React, { Component } from 'react';

import Footer from '../footer';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';

import './app.css';

const filterData = (tasks, filterName) => {
  switch (filterName) {
    case 'all':
      return tasks;
    case 'active':
      return tasks.filter((task) => task.type !== 'completed');
    case 'completed':
      return tasks.filter((task) => task.type === 'completed');
    default:
      return tasks;
  }
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      taskData: [
        {
          id: 1,
          type: 'completed',
          description: 'Completed task',
          created: new Date(1995, 6, 2).getTime(),
        },
        {
          id: 2,
          type: 'editing',
          description: 'Editing task',
          created: new Date(1987, 1, 11).getTime(),
        },
        {
          id: 3,
          type: 'active',
          description: 'Active task',
          created: new Date(1989, 6, 10).getTime(),
        },
      ],
      idCounter: 4,
      filter: 'all',
    };
    this.filterData = filterData.bind(this);
  }

  increaseIdCounter = () => {
    const { idCounter } = this.state;
    this.setState(() => {
      let newIdCounter = idCounter;
      newIdCounter += 1;

      return {
        idCounter: newIdCounter,
      };
    });
  };

  createTodoItem = (label) => {
    const { idCounter } = this.state;
    this.increaseIdCounter();

    return {
      id: idCounter,
      type: 'active',
      description: label,
      created: new Date().getTime(),
    };
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ taskData }) => {
      const newData = [...taskData, newItem];

      return {
        taskData: newData,
      };
    });
  };

  markTaskDone = (id) => {
    this.setState(({ taskData }) => {
      const index = taskData.findIndex((el) => el.id === id);
      const newTaskData = taskData.slice(0);

      if (newTaskData[index].type === 'active') {
        newTaskData[index].type = 'completed';
      } else {
        newTaskData[index].type = 'active';
      }

      return {
        taskData: newTaskData,
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({ taskData }) => {
      const index = taskData.findIndex((el) => el.id === id);

      const beforeInd = taskData.slice(0, index);
      const afterInd = taskData.slice(index + 1);
      const newData = [...beforeInd, ...afterInd];

      return {
        taskData: newData,
      };
    });
  };

  deleteCompleteTasks = () => {
    this.setState(() => {
      const { taskData } = this.state;
      const activeTasks = this.filterData(taskData, 'active');

      return {
        taskData: activeTasks,
      };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { taskData, filter } = this.state;
    const visibleTasks = this.filterData(taskData, filter);

    return (
      <section className="app">
        <header className="header">
          <h1>Todo list</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList visibleTasks={visibleTasks} onDoneTask={this.markTaskDone} onDeleteTask={this.deleteTask} />
          <Footer
            onDeleteCompleteTasks={this.deleteCompleteTasks}
            tasks={taskData}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </section>
    );
  }
}
