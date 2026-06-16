import API from "../api/axios";

function TaskList({ tasks, fetchTasks }) {
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id} style={card}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

const card = {
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: "8px",
};