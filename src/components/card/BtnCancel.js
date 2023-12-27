import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

function BtnBuy({ productPk, handleCancelProduct }) {
  return (
    <SmallBtnStyles onClick={e => handleCancelProduct(e, productPk)}>
      취소
    </SmallBtnStyles>
  );
}

export default BtnBuy;
