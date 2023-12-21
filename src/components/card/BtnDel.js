import React, { useState } from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import { deleteProduct } from "../../api/product/product_api";

const BtnDel = ({ userPk, productPk, onDeleteSuccess }) => {
  const handleDeleteProduct = async () => {
    try {
      console.log("삭제");
      await deleteProduct(userPk, productPk);
      console.log("삭제 성공");
      onDeleteSuccess(); // 삭제 성공 후 콜백 호출
    } catch (error) {
      console.error("제품 삭제 오류:", error);
    }
  };

  return (
    <SmallBtnStyles type="button" onClick={handleDeleteProduct}>
      삭제
    </SmallBtnStyles>
  );
};

export default BtnDel;
