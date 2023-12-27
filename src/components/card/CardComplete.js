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

const CardComplete = ({ item, getAllProduct, handleDeleteProduct }) => {
  const [productPk, setProductPk] = useState(item.productPk);
  const userPk = item.userPk;

  const handleCardSelect = async event => {
    alert("장본것을 취소 하였습니다");
    event.stopPropagation(); //
    await patchProduct(userPk, item.productPk);
    // 새로고침 대신에 ===> 전체목록  State  dhqeodkxn
    // window.location.reload();
    await getAllProduct();
  };
  // 카드를 선택했을 때의 이벤트 핸들러입니다.

  const handleDelete = async (productPk, userPk) => {
    await deleteProduct(userPk, productPk);
    getAllProduct();
  };

  const handleCancelProduct = async (productPk, userPk) => {
    await patchProduct(userPk, productPk);
  };

  return (
    <CardContainer>
      <CardBox>
        <CardEnd>
          {/* <DateText>{getCurrentDate()}</DateText> */}
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
