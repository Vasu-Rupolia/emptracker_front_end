export const taskCompleted = (setMessage) => (e) => {
    e.preventDefault();

    const storedTasks = JSON.parse(localStorage.getItem("scheduledTasks")) || [];

    if (storedTasks.length === 0) {
        setMessage("No tasks found in localStorage.");
        return;
    }

    const currentTime = new Date();
    const today = new Date().toISOString().split("T")[0];

    let completedTasks = [];

    storedTasks.forEach((task) => {
        const taskStartTime = new Date(`${today}T${task.start_time}`);
        const taskEndTime = new Date(`${today}T${task.end_time}`);

        if (isNaN(taskStartTime.getTime()) || isNaN(taskEndTime.getTime())) {
            setMessage("Invalid time format in stored tasks.");
            return;
        }

        const minutesRemaining = Math.floor((taskEndTime - currentTime) / (1000 * 60));

        if (currentTime > taskEndTime) {
            completedTasks.push(`${task.task_name}: Completed **late**! Should have been done by ${task.end_time}.`);
        } else {
            completedTasks.push(`${task.task_name}: Completed **on time**! Finished **${minutesRemaining} minutes early**.`);
        }
    });

    // Remove completed tasks from localStorage
    const remainingTasks = storedTasks.filter((task) => {
        const taskEndTime = new Date(`${today}T${task.end_time}`);
        return currentTime < taskEndTime; // Keep only tasks that are still active
    });

    localStorage.setItem("scheduledTasks", JSON.stringify(remainingTasks));

    // Show message with all completed tasks
    setMessage(completedTasks.join("\n"));
};


//----------------------------------------------------------------------------------------------------------------------------------------