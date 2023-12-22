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
import { putProduct } from "../../api/product/product_api";

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

  const handleDelete = event => {
    console.log("Delete Clicked");
  };

  const handleEdit = async (productPk, userPk, categoryPk, productNm, memo) => {
    const payload = { userPk, productNm, categoryPk, memo, productPk };
    console.log(payload);
    await putProduct(payload);

    // console.log("Edit Clicked", productNm, categoryPk);
  };

  const preventButtonClick = event => {
    event.stopPropagation();
  };

  return (
    <>
      <CardContainer style={{ pointerEvents: "none" }}>
        <CardBox onClick={handleCardFormClick}>
          <Heading>{item.productNm}</Heading>
          <Category>{item.categoryNm}</Category>
          <Memo>{item.memo}</Memo>
          <CardFormBtn
            onClick={preventButtonClick}
            style={{ marginBottom: 110 }}
          >
            <BtnEdit item={item} onClick={handleEdit} />
            <BtnDel onClick={handleDelete} />
          </CardFormBtn>
        </CardBox>
      </CardContainer>
    </>
  );
};

export default CardForm;
