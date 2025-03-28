
export const setScheduledTasks = (data) =>  {
    return {
        type : 'SET_GLOBAL_STATE_OF_TASKS',
        payload : data
    }
};

export const updateScheduledTasksObj = (data) => {
    return {
        type : "UPDATE_GLOBAL_STATE_OF_TASKS",
        payload : data
    }
};

export const setDummyData = (data) => {
    return {
        type: "SET_DUMMY_DATA",
        payload: data
    }
}