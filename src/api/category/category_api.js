import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/category`;

export const getCategory = async () => {
  try {
    const res = await axios.get(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
