import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/category`;

export const getCategory = async (categoryPk, categoryNm) => {
  try {
    const res = await axios.get(
      `${path}?userPk=${categoryPk}&choiceList=${categoryNm}`,
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
