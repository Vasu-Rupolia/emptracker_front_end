const initialState = {
    scheduledTasks: [],
    scheduled: {},
    practice: null
};

// Reducer function
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_GLOBAL_STATE_OF_TASKS":
            return { ...state, scheduledTasks: action.payload };
        case "UPDATE_GLOBAL_STATE_OF_TASKS":
            return { ...state,
                 scheduled: action.payload,
                 scheduledTasks:state.scheduledTasks.map(item=>{
                return item._id === action.payload.id ? {...item, ...action.payload} : item
            }) };
        case "SET_DUMMY_DATA":
            return {...state, practice: action.payload};
        default:
            return state;
    }
};

export default taskReducer;
