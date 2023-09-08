// bookService.js

import axios from "axios";
import { API_URL } from "./urlHelper";
const URL = API_URL + "/users";

const getAllUsers = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export default {
  getAllUsers,
};
