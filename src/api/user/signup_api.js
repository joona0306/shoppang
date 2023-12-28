import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/product`;

export const postSignup = async failFn => {
  try {
    const res = await axios.post(`${path}`);
  } catch (error) {
    failFn();
  }
};
