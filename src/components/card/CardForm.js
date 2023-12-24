import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CardBox,
  CardContainer,
  CardFormBtn,
  Category,
  Heading,
  Memo,
} from "../../styles/ComponentsStyles";
import BtnDel from "./BtnDel";
import BtnEdit from "./BtnEdit";
import { putProduct, deleteProduct } from "../../api/product/product_api";

const CardForm = ({ item }) => {
  const navigate = useNavigate();

  const handleCardFormClick = () => {
    navigate(
      `/cart/cartCompleted?productNm=${encodeURIComponent(
        item.productNm,
      )}&categoryNm=${encodeURIComponent(
        item.categoryNm,
      )}&memo=${encodeURIComponent(item.memo)}`,
    );
  };

  const handleEdit = async (productPk, userPk, categoryPk, productNm, memo) => {
    const payload = { userPk, productNm, categoryPk, memo, productPk };
    console.log(payload);
    await putProduct(payload);

    // console.log("Edit Clicked", productNm, categoryPk);
  };

  // const handleDel = async (userPk, productPk) => {
  //   const delpayload = { userPk, productPk };
  //   console.log(delpayload);
  //   await deleteProduct(delpayload);
  // };

  const preventButtonClick = event => {
    event.stopPropagation();
  };

  return (
    <>
      <CardContainer>
        <CardBox onClick={handleCardFormClick}>
          <Heading>{item.productNm}</Heading>
          <Category>{item.categoryNm}</Category>

          <Memo>{item.memo}</Memo>
          <CardFormBtn onClick={preventButtonClick} style={{}}>
            <BtnEdit item={item} onClick={handleEdit} />
            <BtnDel />
          </CardFormBtn>
        </CardBox>
      </CardContainer>
    </>
  );
};

export default CardForm;
