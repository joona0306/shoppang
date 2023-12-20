import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import { CardBox, CardCompleteBtn, CardEnd, Category, DateText, Heading, Memo } from "../../styles/ComponentsStyles";


const CardComplete = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    return `${year}.${month}.${day}`;
  };

  return (
    <CardBox>
      <CardEnd>
        <DateText>{getCurrentDate()}</DateText>

        <Heading>상품이름</Heading>
        <Category>카테고리</Category>

        <Memo>
          Memo: Supporting or descriptive text for the card goes here like a
          pro. Memo: Supporting or descriptive text for the card goes here like
          a pro.
        </Memo>
      </CardEnd>
      <CardCompleteBtn>
        <SmallBtnStyles type="button">삭제</SmallBtnStyles>
      </CardCompleteBtn>
    </CardBox>
  );
};

export default CardComplete;
