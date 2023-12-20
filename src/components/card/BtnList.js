import { useEffect } from "react";
import { useNavigate } from "react-router";
import { LargeBtnStyles } from "../../styles/LayoutStyles";

const BtnList = () => {
  const navigate = useNavigate();
  const handleClickPlan = () => {
    navigate("/cart/cartplan");
  };
  useEffect(() => {}, []);
  return (
    <div>
      <LargeBtnStyles type="button" onClick={handleClickPlan}>
        장 볼것
      </LargeBtnStyles>
    </div>
  );
};

export default BtnList;
