import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/user/signin`;

export const postSignin = async (obj, postResult, failFn) => {
  try {
    const res = await axios.post(`${path}`, obj);
    // console.log(res.data.result);
    postResult(res.data.result);
  } catch (error) {
    failFn();
    // postResult(1);
  }
};
