import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {updateScheduledTasksObj} from '../../redux/actions/globalAction';
import {updateScheduledTasksStatus, updateTask} from '../../api/tasksApi';
import { ChevronsUp } from "lucide-react";
const SetTaskTiming = ({ task, onClose }) => {
    
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const globalState = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        if (task) {
            setId(task._id || "");
            setTitle(task.title || "");
            setDescription(task.description || "");
        }
    }, [task]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateScheduledTasksStatus(id, 'scheduled');
        const taskk = { id, title, description, startTime, endTime };
        const resp = await updateTask(taskk);

        console.log("resop", resp);
        dispatch(updateScheduledTasksObj(taskk));

        console.log("Updated Task:", { id, title, description, startTime, endTime });
        localStorage.setItem('scheduled tasks', JSON.stringify(taskk))
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                <h2 className="text-2xl font-semibold mb-4">Set Task Timing</h2>
                
                <form onSubmit={handleSubmit}>
                    {/* ✅ Ensure the hidden input correctly retains the task ID */}
                    <input
                            type="hidden"
                            className="w-full p-2 border rounded"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            required
                        />
                    
                    <div className="mb-4">
                        <label className="block font-medium">Title</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block font-medium">Description</label>
                        <textarea
                            className="w-full p-2 border rounded"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    
                    <div className="mb-4">
                        <label className="block font-medium">Start Time</label>
                        <input
                            type="time"
                            className="w-full p-2 border rounded"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block font-medium">End Time</label>
                        <input
                            type="time"
                            className="w-full p-2 border rounded"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex justify-end gap-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SetTaskTiming;
