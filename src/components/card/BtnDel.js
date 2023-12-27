import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

function BtnDel({ productPk, handleDeleteProduct }) {
  return (
    <SmallBtnStyles onClick={e => handleDeleteProduct(e, productPk)}>
      삭제
    </SmallBtnStyles>
  );
}

export default BtnDel;
