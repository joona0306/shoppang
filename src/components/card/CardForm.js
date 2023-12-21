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
    event.stopPropagation();
    console.log("Delete Clicked");
  };

  const handleEdit = event => {
    event.stopPropagation();
    console.log("Edit Clicked");
  };

  // Prevent propagation of click events from the CardForm to the buttons
  const preventButtonClick = event => {
    event.stopPropagation();
  };

  return (
    <CardContainer style={{ pointerEvents: "none" }}>
      <CardBox onClick={handleCardFormClick}>
        <Heading>{item.productNm}</Heading>
        <Category>{item.categoryNm}</Category>
        <Memo>{item.memo}</Memo>
        <CardFormBtn
          onClick={preventButtonClick}
          style={{ pointerEvents: "auto" }}
        >
          <BtnEdit onClick={handleEdit} />
          <BtnDel onClick={handleDelete} />
        </CardFormBtn>
      </CardBox>
    </CardContainer>
  );
};

export default CardForm;
