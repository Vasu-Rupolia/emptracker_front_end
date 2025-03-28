import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateScheduledTasksObj } from "../../redux/actions/globalAction";
import { updateScheduledTasksStatus, updateTask } from "../../api/tasksApi";
import Input from "../../components/Common/Inputs/Input";
import Layout from "../../components/Layout/Layout";
import { getAllUsers } from "../../api/userApi";
import { assignTask } from "../../api/tasksApi";

const AssignTask = ({ task }) => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [to_user_id, setAssignedUser] = useState(""); // User selection
  const [priority, setPriority] = useState("medium"); // Priority selection
  const [from_user_id, setFromId] = useState("");

  const [users, setUsers] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (task) {
      
      setTitle(task.title || "");
      setDescription(task.description || "");
      
    }
  }, [task]);

  useEffect(() => {
    async function fetchUsers() {
        
      try {
        const userss = await getAllUsers();
        setUsers(userss);
        
        const u = localStorage.getItem('user');
        const us = JSON.parse(u);
        setFromId(us._id);

      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
  
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description, to_user_id, priority, from_user_id };
    await assignTask(taskData);

    setTitle("");
    setDescription("");
    setAssignedUser("");
    setPriority("");
    setFromId("");
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Assign Task</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-gray-700 font-semibold">Task Name</label>
            <Input
              type="hidden"
              className="w-full p-3 border rounded-lg"
              value={from_user_id}
              
              required
            />
            <Input
              type="text"
              className="w-full p-3 border rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Task Description */}
          <div>
            <label className="block text-gray-700 font-semibold">Task Description</label>
            <textarea
              className="w-full p-3 border rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="4"
            ></textarea>
          </div>

          {/* Assign to User Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold">Assign To</label>
            <select
              className="w-full p-3 border rounded-lg"
              value={to_user_id}
              onChange={(e) => setAssignedUser(e.target.value)}
              required
            >
              <option value="">Select a User</option>
              {users?.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.first_name} {user.last_name}
                </option>
              ))}
            </select>
          </div>

          {/* Priority Selection (Radio Buttons) */}
          <div>
            <label className="block text-gray-700 font-semibold">Priority</label>
            <div className="flex gap-4 mt-2">
              {["high", "medium", "low"].map((level) => (
                <label key={level} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value={level}
                    checked={priority === level}
                    onChange={(e) => setPriority(e.target.value)}
                    className="accent-blue-500"
                  />
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Assign Task
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AssignTask;
