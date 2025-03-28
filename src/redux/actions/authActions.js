import { LOGIN } from "../types/authTypes";

export const login = (data) =>  {
    localStorage.setItem("user", JSON.stringify(data)); // Save to localStorage
    return {
        type : LOGIN,
        payload : data
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Remove from localStorage
    dispatch({ type: "LOGOUT" });
};
