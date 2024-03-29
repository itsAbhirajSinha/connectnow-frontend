import axios from "axios";

export const getMeetToken = async (room, user) => {
    try {
        const params = {
            "roomName": room,
            "participantName": user
        };

        const res = await axios.get(`https://connectnow-backend.vercel.app/getToken`, {
            params,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return res.data;
    } catch (error) {
        // Handle error
        console.error('Error fetching token:', error);
        throw error; // Rethrow error for the caller to handle
    }
};
