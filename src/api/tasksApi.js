import { baseUrl } from "../utils/baseUrl";

export const getMyTasks = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${baseUrl}api/user/view_my_tasks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "emptracker",
                "Authorization": `Bearer ` + token
            }
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error
    }
}

//--------------------------------------------------------------------------------------------------------------------------------

export const updateScheduledTasksStatus = async (task_id, status) => {
    try {
        const response = await fetch(`${baseUrl}api/task/update_task_status`, {

        //http://localhost:8787/api/task/update_task_status
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ task_id, status })
        });

        const data = response.json();

    } catch (error) {
        return error;
    }
}

//--------------------------------------------------------------------------------------------------------------------------------

export const updateTask = async (data) => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${baseUrl}api/task/update_task`, {
            method: "PUT",
            headers: {
                'Content-Type' :' application/json',
                "x-api-key": "emptracker",
                "Authorization": `Bearer ` + token
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        return error;
    }
}

//--------------------------------------------------------------------------------------------------------------------------------

export const assignTask = async (data) => {
    
    try {
        const token = localStorage.getItem('token');
        await fetch(`${baseUrl}api/user/assign_task`, {
            method: 'POST',
            headers: {
                'Content-Type'  : 'application/json',
                'Authorization' : `Bearer ${token}`,
            },
            body : JSON.stringify(data)
        });
    } catch (error) {
        return error;
    }

}

//--------------------------------------------------------------------------------------------------------------------------------