import { LOGIN,LOGOUT } from "../types/authTypes";


const initialState = {
    // user: localStorage.getItem("token") ? { token: localStorage.getItem("token") } : null
    // user: {}
    user: JSON.parse(localStorage.getItem("user")) || null, // Load user from localStorage
    tasks: {}

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("user", JSON.stringify(action.payload)); // Save user
            return { ...state, user: action.payload };
        case LOGOUT:
            localStorage.removeItem("user"); // Remove user on logout
            return { ...state, user: null };
        default:
            return state;
    }
};

export default authReducer;
