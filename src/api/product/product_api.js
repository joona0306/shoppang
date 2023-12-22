import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/product`;

export const getProduct = async (userPk, choiceList, setPlanData) => {
  try {
    const res = await axios.get(
      `${path}?userPk=${userPk}&choiceList=${choiceList}`,
    );
    // console.log(res.data);
    setPlanData(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다. 잠시후 시도해 주세요.");
    setPlanData([
      {
        productPk: 1,
        userPk: 1,
        productNm: "상ddd품명",
        categoryNm: "기타",
        memo: "메모",
        createdAt: "2023-12-19 15:56:43",
        buyingCheck: 0,
        buyingDate: null,
      },
      {
        productPk: 2,
        userPk: 1,
        productNm: "고기",
        categoryNm: "생필품",
        memo: "맛있다",
        createdAt: "2023-12-19 16:34:18",
        buyingCheck: 0,
        buyingDate: null,
      },
      {
        productPk: 3,
        userPk: 1,
        productNm: "라면",
        categoryNm: "생필품",
        memo: "맛없다",
        createdAt: "2023-12-19 16:35:05",
        buyingCheck: 0,
        buyingDate: null,
      },
      {
        productPk: 4,
        userPk: 1,
        productNm: "치약",
        categoryNm: "기타",
        memo: "얼마지?",
        createdAt: "2023-12-19 16:36:17",
        buyingCheck: 0,
        buyingDate: null,
      },
      {
        productPk: 5,
        userPk: 1,
        productNm: "짜장면",
        categoryNm: "생필품",
        memo: "맛있다",
        createdAt: "2023-12-19 16:59:30",
        buyingCheck: 0,
        buyingDate: null,
      },
      {
        productPk: 6,
        userPk: 1,
        productNm: "박준서",
        categoryNm: "기타",
        memo: "작업중",
        createdAt: "2023-12-19 17:09:46",
        buyingCheck: 0,
        buyingDate: null,
      },
    ]);
  }
};
export const postProduct = async (obj, getAllProduct) => {
  // console.log("postProduct", obj);
  try {
    const res = await axios.post(`${path}`, obj);
    // console.log(res.data);
    const st = res.status.toString();
    // console.log(st);
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
export const putProduct = async () => {
  try {
    const res = await axios.put(`${path}`);
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const patchProduct = async () => {
  try {
    const res = await axios.patch(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async () => {
  try {
    const res = await axios.delete(`${path}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
