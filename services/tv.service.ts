// tvShowService.js

import axios from "axios";
import { API_URL } from "./urlHelper";

const URL = API_URL + "/tv";

const getAllTvShows = async (viewer: string) => {
  try {
    let query = viewer ? "?viewer=" + viewer : "";
    const response = await axios.get(URL + "/filter" + query);
    return response.data.tvs;
  } catch (error) {
    console.error("Error fetching tvShows:", error);
    throw error;
  }
};

const getTvShowStats = async () => {
  try {
    const response = await axios.get(URL + "/stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching tvShows:", error);
    throw error;
  }
};

const addTv = async (tvForm: any) => {
  try {
    const response = await axios.post(URL, tvForm);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const updateTv = async (tvForm: any, tvId: string) => {
  try {
    const response = await axios.put(URL + "/" + tvId, tvForm);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const deleteTv = async (tvId: string) => {
  try {
    const response = await axios.delete(URL + "/" + tvId);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
export default {
  getAllTvShows,
  getTvShowStats,
  addTv,
  updateTv,
  deleteTv,
};
