import axios from "axios";
import { API_URL } from "config";

export const getPlaces = async () => {
  try {
    const response = await axios.get(`${API_URL}/places`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPlaceById = async (placeId) => {
  try {
    const response = await axios.get(`${API_URL}/places/${placeId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const searchPlaces = async (search) => {
  try {
    const response = await axios.get(`${API_URL}/places/search/${search}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
