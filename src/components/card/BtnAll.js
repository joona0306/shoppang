import React from "react";
import { useNavigate } from "react-router-dom";
import { LargeBtnStyles } from "../../styles/LayoutStyles";

const BtnAll = () => {
  const navigate = useNavigate();
  const handleClickAll = () => {
    navigate("/cart/cartall");
  };
  return (
    <div>
      <LargeBtnStyles type="button" onClick={handleClickAll}>
        모두보기
      </LargeBtnStyles>
    </div>
  );
};

export default BtnAll;
