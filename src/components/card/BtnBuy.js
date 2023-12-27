import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

function BtnBuy({ userPk, productPk, handleBuyProduct }) {
  // onClick 핸들러를 수정하였습니다.

  return (
    <SmallBtnStyles onClick={e => handleBuyProduct(e, productPk)}>
      구입
    </SmallBtnStyles>
  );
}

export default BtnBuy;
