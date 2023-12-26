import { useState } from "react";
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
import {
  putProduct,
  getProduct,
  patchProduct,
  deleteProduct,
} from "../../api/product/product_api";

const CardForm = ({ item, onCardDelete, userPk }) => {
  const [productPk, setProductPk] = useState(item.productPk);

  const handleCardSelect = event => {
    // event.stopPropagation(); //
    window.location.reload();
    alert("장보기를 완료 하셨습니다");

    patchProduct(userPk, item.productPk);
  };

  const handleEdit = async (productPk, userPk, categoryPk, productNm, memo) => {
    const payload = { userPk, productNm, categoryPk, memo, productPk };

    console.log(payload);
    await putProduct(payload);
  };

  const handleDelete = async (productPk, userPk) => {
    await deleteProduct(userPk, productPk);
  };
  console.log(userPk, productPk);
  return (
    <>
      <CardContainer>
        <CardBox item={item} onClick={handleCardSelect}>
          <Heading>{item.productNm}</Heading>
          <Category>{item.categoryNm}</Category>
          <Memo>{item.memo}</Memo>
          <CardFormBtn>
            <BtnEdit item={item} onClick={handleEdit} />
            <BtnDel userPk={userPk} productPk={productPk} />
          </CardFormBtn>
        </CardBox>
      </CardContainer>
    </>
  );
};

export default CardForm;
