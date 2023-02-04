import React from "react";

import Footer from "../footer";
import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";

import "./app.css";

const App = () => {
  const taskData = [
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
  ];

  return (
    <section className="todo-app">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList tasks={taskData}/>
        <Footer />
      </section>
    </section>
  );
}

export default App;
