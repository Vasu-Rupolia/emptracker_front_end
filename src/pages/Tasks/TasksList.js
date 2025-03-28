import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { getMyTasks } from "../../api/tasksApi";
import Layout from "../../components/Layout/Layout";
import { ArrowBigRight, CheckCircle, Trash2 } from "lucide-react";
import SetTaskTiming from "./SetTaskTiming"; // ✅ Import the modal component
import { useSelector } from "react-redux";
import { setScheduledTasks } from "../../redux/actions/globalAction";
import  {useDispatch} from 'react-redux';

const TasksList = () => {
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();

    const globalTasks = useSelector(state => state.task.scheduledTasks);
    console.log("current tasks", globalTasks);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getMyTasks();
            dispatch(setScheduledTasks(data.response_data));
        };

        fetchTasks();
    }, []);

    const handleOpenModal = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    };

    const handleCompleted = () => {
        
    }

    const columns = [
        { name: "S.No", selector: (row, index) => index + 1, sortable: true, width: "80px" },
        { name: "Title", selector: (row) => row.title, sortable: true },
        { name: "Description", selector: (row) => row.description },
        { name: "Due Date", selector: (row) => row.dueDate, sortable: true },
        {
            name: "Priority",
            selector: (row) => row.priority,
            sortable: true,
            cell: (row) => (
                <span className={`font-bold ${row.priority === "High" ? "text-red-500" : row.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
                    {row.priority}
                </span>
            ),
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex gap-2">
                    <CheckCircle 
                    className={`w-6 h-6 text-green-500 ${
                        row.startTime 
                            ? "text-blue-500 cursor-pointer hover:text-blue-700" // Disabled style
                            : "text-gray-400 cursor-not-allowed" 
                            
                    }`}
                    onClick={() => row.startTime ? handleCompleted(row) : null}
                    />
                    <ArrowBigRight
                        className={`w-5 h-5 ${
                            row.startTime 
                                ? "text-gray-400 cursor-not-allowed"  // Disabled style
                                : "text-blue-500 cursor-pointer hover:text-blue-700"
                        }`}
                        onClick={() => row.startTime ? null : handleOpenModal(row)}

                    />
                    <Trash2 className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700" />
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];

    return (
        <Layout>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Task List</h2>
                <div className="shadow-lg rounded-lg bg-white">
                    <DataTable 
                    columns={columns} 
                    data={globalTasks} 
                    pagination 
                    highlightOnHover 
                    striped 
                    responsive />
                </div>
            </div>

            {/* ✅ Modal for SetTaskTiming */}
            {isModalOpen && <SetTaskTiming task={selectedTask} onClose={handleCloseModal} />}
        </Layout>
    );
};

export default TasksList;
