import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/product`;

export const postSignup = async () => {
  try {
    const res = await axios.post(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
