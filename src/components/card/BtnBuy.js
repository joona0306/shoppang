import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

function BtnBuy({ productPk, handleBuyProduct }) {
  return (
    <SmallBtnStyles onClick={e => handleBuyProduct(e, productPk)}>
      구매완료
    </SmallBtnStyles>
  );
}

export default BtnBuy;
