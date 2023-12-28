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
  patchProduct,
  deleteProduct,
} from "../../api/product/product_api";
import BtnBuy from "./BtnBuy";
import { useNavigate } from "react-router-dom";
const CardForm = ({ item, getAllProduct, handleDeleteProduct }) => {
  const [productPk, setProductPk] = useState(item.productPk);
  const userPk = item.userPk;

  const handleCardSelect = async event => {
    alert("장보기를 완료 하였습니다");
    event.stopPropagation();
    await patchProduct(userPk, item.productPk, failFn);
    // 새로고침 대신에 ===> 전체목록  State  업데이트
    await getAllProduct();
  };

  const handleEdit = async (productPk, userPk, categoryPk, productNm, memo) => {
    const payload = { userPk, productNm, categoryPk, memo, productPk };

    // console.log(payload);
    await putProduct(payload, failFn);
    await getAllProduct();
  };

  const navigate = useNavigate();
  const failFn = () => {
    // alert("잠시 서버가 불안정합니다. \n다시 시도하세요.");
    navigate("/");
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
