import React from "react";

const TodoItem = ({ task, tasks, setTasks }) => {
  const toggleStatus = () => {
    task.completed = !task.completed;
      console.log(task);
      const updatedTasks = 
    setTasks();
  };
  return (
    <li
      style={task.completed ? { textDecoration: "line-through" } : null}
      onClick={toggleStatus}
    >
      {task.name}
    </li>
  );
};

export default TodoItem;
