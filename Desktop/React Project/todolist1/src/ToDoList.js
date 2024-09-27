import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      user: "User 1",
      status: "Completed",
      dueDate: "12/10/2024",
      priority: "Low",
      comments: "This task is good",
    },
    {
      id: 2,
      user: "User 2",
      status: "In Progress",
      dueDate: "14/09/2024",
      priority: "High",
      comments: "This task is urgent",
    },
    {
      id: 3,
      user: "User 3",
      status: "Not Started",
      dueDate: "18/08/2024",
      priority: "Low",
      comments: "This needs work",
    },
    {
      id: 4,
      user: "User 4",
      status: "In Progress",
      dueDate: "12/06/2024",
      priority: "Normal",
      comments: "This task is good",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [newTask, setNewTask] = useState({
    id: null,
    user: "",
    status: "",
    dueDate: "",
    priority: "",
    comments: "",
  });

  const handleNewTask = () => {
    setCurrentTask(null); // Reset for new task
    setNewTask({
      id: null,
      user: "",
      status: "",
      dueDate: "",
      priority: "",
      comments: "",
    });
    setShowModal(true);
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setNewTask({ ...task });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleSaveTask = () => {
    if (newTask.id) {
      // Editing an existing task
      const updatedTasks = tasks.map((task) =>
        task.id === newTask.id ? newTask : task
      );
      setTasks(updatedTasks);
    } else {
      // Adding a new task
      const newId = tasks.length + 1;
      setTasks([...tasks, { ...newTask, id: newId }]);
    }
    setShowModal(false); // Close modal after saving
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Tasks</h2>
        <div>
          <button className="btn btn-warning me-2" onClick={handleNewTask}>
            New Task
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th scope="col">Assigned To</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
            <th scope="col">Priority</th>
            <th scope="col">Comments</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <a href="#">{task.user}</a>
              </td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleEdit(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {currentTask ? "Edit Task" : "New Task"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Assigned To</label>
                    <input
                      type="text"
                      className="form-control"
                      name="user"
                      value={newTask.user}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      name="status"
                      value={newTask.status}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Due Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dueDate"
                      value={newTask.dueDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Priority</label>
                    <input
                      type="text"
                      className="form-control"
                      name="priority"
                      value={newTask.priority}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Comments</label>
                    <textarea
                      className="form-control"
                      name="comments"
                      value={newTask.comments}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveTask}
                >
                  Save Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;