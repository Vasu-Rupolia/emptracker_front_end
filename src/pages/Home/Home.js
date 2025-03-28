import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/Common/Inputs/Input";
import {taskCompleted} from "../../utils/functions";

const Home = () => {
    const [taskName, setTaskName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [message, setMessage] = useState("");

    // Function to schedule a new task
    const scheduleTask = (e) => {
        e.preventDefault();

        const newTask = {
            task_name: taskName,
            start_time: startTime,
            end_time: endTime,
        };

        // Get existing tasks or initialize an empty array
        const existingTasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];

        // Append the new task
        existingTasks.push(newTask);

        // Save back to localStorage
        localStorage.setItem("scheduledTasks", JSON.stringify(existingTasks));

        // Reset fields
        setTaskName("");
        setStartTime("");
        setEndTime("");
    };

    return (
        <Layout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                        Task Scheduler
                    </h2>

                    <form className="space-y-4">
                        {/* Task Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Task Name
                            </label>
                            <Input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                onChange={(e) => setTaskName(e.target.value)}
                                value={taskName}
                                placeholder="Enter task name"
                                required
                            />
                        </div>

                        {/* Start Time */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Start Time
                            </label>
                            <Input
                                type="time"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                onChange={(e) => setStartTime(e.target.value)}
                                value={startTime}
                                required
                            />
                        </div>

                        {/* End Time */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                End Time
                            </label>
                            <input
                                type="time"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                onChange={(e) => setEndTime(e.target.value)}
                                value={endTime}
                                required
                            />
                        </div>

                        {/* Save Task Button */}
                        <button
                            onClick={scheduleTask}
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Save Task
                        </button>

                        {/* Task Completed Button */}
                        <button
                            onClick={taskCompleted(setMessage)}
                            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                        >
                            Task Completed
                        </button>

                        {/* Display Message */}
                        {message && (
                            <p className="mt-4 text-center font-medium text-gray-700">{message}</p>
                        )}
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
