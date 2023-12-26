import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import { deleteProduct } from "../../api/product/product_api";

function BtnDel({ userPk, productPk }) {
  const handleDeleteProduct = async event => {
    event.stopPropagation();
    try {
      await deleteProduct(userPk, productPk);
    } catch (error) {
      console.error("Failed to delete the product", error);
    }
  };

  // onClick 핸들러를 수정하였습니다.
  return <SmallBtnStyles onClick={handleDeleteProduct}>삭제</SmallBtnStyles>;
}

export default BtnDel;
