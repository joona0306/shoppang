// BtnDel.js 또는 해당 파일

import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import { deleteProduct } from "../../api/product/product_api";

const BtnDel = ({ productPk, onDeleteSuccess }) => {
  const userPk = "1"; // 예를 들어 '1234'와 같은 고정된 값

  const handleDel = async () => {
    const delpayload = { userPk, productPk };

    try {
      const response = await deleteProduct(delpayload);
      console.log(response.data);
      if (onDeleteSuccess) {
        onDeleteSuccess(); // 삭제 성공 시 onDeleteSuccess 콜백 호출
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      // 사용자에게 오류 메시지를 표시하는 로직을 추가할 수 있습니다.
    }
  };

  return <SmallBtnStyles onClick={handleDel}>삭제</SmallBtnStyles>;
};

export default BtnDel;
