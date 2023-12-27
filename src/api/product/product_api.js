import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/product`;

export const getProduct = async (userPk, choiceList, setPlanData) => {
  try {
    const res = await axios.get(
      `${path}?userPk=${userPk}&choiceList=${choiceList}`,
    );
    setPlanData(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const postProduct = async (obj, getAllProduct) => {
  try {
    const res = await axios.post(`${path}`, obj);
    const st = res.status.toString();
    if (st.charAt(0) === "2") {
      alert("등록에 성공했습니다.");
      getAllProduct();
    } else if (st.charAt(0) === "4") {
      alert("입력항목을 확인해 주세요.");
    }
  } catch (error) {
    console.log(error);
  }
};
export const putProduct = async payload => {
  try {
    const res = await axios.put(`${path}`, payload);
    payload(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const patchProduct = async (userPk, productPk) => {
  try {
    const res = await axios.patch(
      `${path}?userPk=${userPk}&productPk=${productPk}`,
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (userPk, productPk) => {
  try {
    const res = await axios.delete(
      `${path}?userPk=${userPk}&productPk=${productPk}`,
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
