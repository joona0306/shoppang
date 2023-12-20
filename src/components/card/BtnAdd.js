import React from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";


const BtnAdd = ({ onAddCard, margin }) => {
  const handleAddCard = () => {
    onAddCard();
  };

  const buttonStyle = {
    position: "relative",
    marginTop: margin || "20px",
    width: "90px",
  };

  return (
    <SmallBtnStyles style={buttonStyle} onClick={handleAddCard}>
      추가하기
    </SmallBtnStyles>
  );
};

export default BtnAdd;
