import { baseUrl } from "../utils/baseUrl";

export const loginApi = async (email, password)  => {
    try {
        const response = await fetch(`${baseUrl}api/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'x-api-key': 'emptracker'
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        
        return data
    } catch (error) {
        console.error("Login Error:", error);
        return error
    }
};