import { useState } from "react";
import API from "../api/axios";

function TaskForm({ fetchTasks }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", task);

      setTask({ title: "", description: "" });

      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.message || "Error adding task");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={box}>
      <h3>Add Task</h3>

      <input
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Title"
        style={input}
      />

      <input
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
        style={input}
      />

      <button style={button}>Add Task</button>
    </form>
  );
}

export default TaskForm;

const box = {
  background: "#fff",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "10px",
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
};

const button = {
  width: "100%",
  padding: "10px",
  background: "#4facfe",
  border: "none",
  color: "#fff",
};