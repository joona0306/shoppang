import { useState } from "react";
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
import { deleteProduct } from "../../api/product/product_api";

const CardComplete = ({ item }) => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${year}.${month}.${day}`;
  };
  const [productPk, setProductPk] = useState(item.productPk);
  const [userPk] = useState(1);

  // 카드를 선택했을 때의 이벤트 핸들러입니다.

  const handleDelete = async (productPk, userPk) => {
    await deleteProduct(userPk, productPk);
  };
  return (
    <CardContainer>
      <CardBox>
        <CardEnd>
          <DateText>{getCurrentDate()}</DateText>
          <Heading>{item.productNm}</Heading>
          <Category>{item.categoryNm}</Category>
          <Memo>{item.memo}</Memo>
        </CardEnd>
        <CardCompleteBtn>
          <BtnDel userPk={userPk} productPk={productPk} />
        </CardCompleteBtn>
      </CardBox>
    </CardContainer>
  );
};

export default CardComplete;
