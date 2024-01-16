'use server'

import { api } from "@/constants";
import axios from "axios";


export const fetchUser = async (username: string) => {
    try {
        
        const { data } = await axios.get(`${api}/users/username/${username}`);
        return data
    } catch (error) {
        return error
    }
}