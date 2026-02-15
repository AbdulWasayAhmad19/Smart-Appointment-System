import axios from "axios";

export const API_URL = "http://localhost:3000";

export async function postRequest<T>(
    endpoint: string,
    data: unknown
): Promise<T> {
    console.log(`Sending request to: ${API_URL}${endpoint}`);

    try {
        const response = await axios.post<T>(`${API_URL}${endpoint}`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error("API Error Response:", error.response.data);
        }
        console.error("API request failed", error);
        throw error;
    }
}
