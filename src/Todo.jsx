import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { name: "Task 1", completed: false },
    { name: "Task 2", completed: false },
    { name: "Task 3", completed: false },
  ]);

  return tasks.map((task) => {
    return <TodoItem task={task} setTasks={setTasks} tasks={tasks} />;
  });
};

export default Todo;
