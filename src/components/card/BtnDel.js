import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import { deleteProduct } from "../../api/product/product_api";

function BtnDel({ userPk, productPk, handleDeleteProduct }) {
  // onClick 핸들러를 수정하였습니다.

  return (
    <SmallBtnStyles onClick={e => handleDeleteProduct(e, productPk)}>
      삭제
    </SmallBtnStyles>
  );
}

export default BtnDel;
