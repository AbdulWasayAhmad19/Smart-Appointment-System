import axios from "axios";

export const API_URL = "http://localhost:5000";

export async function postRequest<T>(
    endpoint: string,
    data: unknown
): Promise<T> {
    // console.log(`Sending request to: ${API_URL}${endpoint}`);

    try {
        const response = await axios.post<T>(`${API_URL}${endpoint}`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("API request failed", error);
        throw error;
    }
}
