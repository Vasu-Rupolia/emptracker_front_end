export const getAllTasksForPractice = async () => {
    try {
        const response = await fetch("http://localhost:4123/api/get_all_tasks", {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const data = response.json();
        return data;

    } catch (error) {
        return error;
    }
}