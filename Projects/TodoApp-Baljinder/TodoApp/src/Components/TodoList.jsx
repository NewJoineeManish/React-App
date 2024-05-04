import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    const updateTask = tasks.map((task) =>
      task.id == id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateTask);
  };

  const remove = (id) => {
    const up = tasks.filter((task) => task.id !== id);
    setTasks(up);
  };

  return (
    <>
      <h1>ToDoList</h1>
      <input
        type="text"
        placeholder="enter info"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addTask() : null)}
      ></input>
      <button onClick={addTask}>add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                toggleTask(task.id);
              }}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => remove(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default TodoList;
