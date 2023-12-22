import React from "react";
import { useLocation } from "react-router-dom";
import {
  CardBox,
  CardCompleteBtn,
  CardContainer,
  CardEnd,
  Category,
  DateText,
  Heading,
  Memo,
} from "../../styles/ComponentsStyles";
import BtnDel from "./BtnDel";

const CardComplete = ({ item }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const productNm = queryParams.get("productNm");
  const categoryNm = queryParams.get("categoryNm");
  const memo = queryParams.get("memo");

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    // 현재 날짜 표시.
    return `${year}.${month}.${day}`;
  };

  return (
    <CardContainer>
      <CardBox>
        {/* CardEnd: 카드폼 위에 완료된 배경색 표시 */}
        <CardEnd>
          {/* DateText: 카드폼 위에 현재 날짜 표시 */}
          <DateText>{getCurrentDate()}</DateText>
          <Heading>{item.productNm}</Heading>
          <Category>{item.categoryNm}</Category>
          <Memo>{item.memo}</Memo>
        </CardEnd>
        <CardCompleteBtn>
          <BtnDel />
        </CardCompleteBtn>
      </CardBox>
    </CardContainer>
  );
};

export default CardComplete;
