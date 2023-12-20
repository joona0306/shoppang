import React from "react";
import { useNavigate } from "react-router";
import { LargeBtnStyles } from "../../styles/LayoutStyles";

const BtnComplete = () => {
    const navigate = useNavigate();
  const handleClickCompleted = () => {
  navigate("/cart/cartCompleted")
  }
  return (
    <div>
      <LargeBtnStyles type="button" onClick={handleClickCompleted}>장 본것</LargeBtnStyles>
    </div>
  );
};

export default BtnComplete;
