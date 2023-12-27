import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import { deleteProduct } from "../../api/product/product_api";

function BtnBuy({ userPk, productPk, handleCancelProduct }) {
  return (
    <SmallBtnStyles onClick={e => handleCancelProduct(e, productPk)}>
      취소
    </SmallBtnStyles>
  );
}

export default BtnBuy;
