import { useState } from "react";
import {
  CardBox,
  CardFormBtn,
  CardContainer,
  CardEnd,
  Category,
  DateText,
  Heading,
  Memo,
} from "../../styles/ComponentsStyles";
import BtnDel from "./BtnDel";
import BtnCancel from "./BtnCancel";
import { deleteProduct, patchProduct } from "../../api/product/product_api";
import { useNavigate } from "react-router-dom";

const CardComplete = ({ item, getAllProduct, handleDeleteProduct }) => {
  const [productPk, setProductPk] = useState(item.productPk);
  const userPk = item.userPk;

  const handleCardSelect = async event => {
    alert("장본것을 취소 하였습니다");
    event.stopPropagation(); //
    await patchProduct(userPk, item.productPk, failFn);
    // 새로고침 대신에 ===> 전체목록  State 업데이트

    await getAllProduct();
  };
  const navigate = useNavigate();
  const failFn = () => {
    // alert("잠시 서버가 불안정합니다. \n다시 시도하세요.");
    navigate("/");
  };

  return (
    <CardContainer>
      <CardBox>
        <CardEnd>
          <Heading>{item.productNm}</Heading>
          <Category>{item.categoryNm}</Category>
          <Memo>{item.memo}</Memo>
          <DateText>{item.buyingDate}</DateText>
        </CardEnd>
        <CardFormBtn>
          <BtnDel
            userPk={userPk}
            productPk={productPk}
            handleDeleteProduct={handleDeleteProduct}
          />
          <BtnCancel item={item} handleCancelProduct={handleCardSelect} />
        </CardFormBtn>
      </CardBox>
    </CardContainer>
  );
};

export default CardComplete;
