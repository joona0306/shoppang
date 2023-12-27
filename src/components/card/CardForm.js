import { useState } from "react";
import {
  CardBox,
  CardContainer,
  CardFormBtn,
  Category,
  Heading,
  Memo,
  DateText,
} from "../../styles/ComponentsStyles";
import BtnDel from "./BtnDel";
import BtnEdit from "./BtnEdit";
import {
  putProduct,
  getProduct,
  patchProduct,
  deleteProduct,
} from "../../api/product/product_api";
import BtnBuy from "./BtnBuy";
const CardForm = ({
  item,
  onCardDelete,
  getAllProduct,
  handleDeleteProduct,
}) => {
  // console.log(item);
  // console.log(getAllProduct);
  const [productPk, setProductPk] = useState(item.productPk);
  const userPk = item.userPk;

  const handleCardSelect = async event => {
    alert("장보기를 완료 하였습니다");
    event.stopPropagation(); //
    await patchProduct(userPk, item.productPk);
    // 새로고침 대신에 ===> 전체목록  State  dhqeodkxn
    // window.location.reload();
    await getAllProduct();
  };

  const handleEdit = async (productPk, userPk, categoryPk, productNm, memo) => {
    const payload = { userPk, productNm, categoryPk, memo, productPk };

    console.log(payload);
    await putProduct(payload);
    await getAllProduct();
  };

  const handleDelete = async (productPk, userPk) => {
    await deleteProduct(userPk, productPk);
  };
  const handleBuyProduct = async (productPk, userPk) => {
    await patchProduct(userPk, productPk);
  };

  return (
    <>
      <CardContainer>
        <CardBox item={item}>
          <Heading>{item.productNm}</Heading>
          <Category>{item.categoryNm}</Category>
          <Memo>{item.memo}</Memo>

          <CardFormBtn>
            <BtnEdit item={item} onClick={handleEdit} />
            <BtnDel
              userPk={userPk}
              productPk={productPk}
              handleDeleteProduct={handleDeleteProduct}
            />
            <BtnBuy item={item} handleBuyProduct={handleCardSelect} />
          </CardFormBtn>
        </CardBox>
      </CardContainer>
    </>
  );
};

export default CardForm;
