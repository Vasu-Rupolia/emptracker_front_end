import { baseUrl } from "../utils/baseUrl";

export const getAllUsers = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${baseUrl}api/user/get_all_users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        console.log("Raw Response:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response Data:", data);

        if (!Array.isArray(data.data)) {
            console.error("Expected an array but got:", data);
            return [];
        }

        return data.data;
    } catch (error) {
        console.error("Error in getAllUsers:", error);
        return [];
    }
};
