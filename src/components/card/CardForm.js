import React from "react";
import { CardBox, CardFormBtn, Category, Heading, Memo } from "../../styles/ComponentsStyles";
import { SmallBtnStyles } from "../../styles/LayoutStyles";


const CardForm = props => {
  const item = props.item;
  return (
    <CardBox>
      <Heading>{item.productNm}</Heading>
      <Category>{item.categoryNm}</Category>
      <Memo>{item.memo}</Memo>
      <CardFormBtn>
        <SmallBtnStyles type="button">수정</SmallBtnStyles>
        <SmallBtnStyles type="button">삭제</SmallBtnStyles>
      </CardFormBtn>
    </CardBox>
  );
};

export default CardForm;
