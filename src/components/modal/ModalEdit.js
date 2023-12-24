import React, { useState } from "react";
import {
  CartModalStyle,
  ModalBackStyle,
  ModalBtnsWrapStyle,
} from "../../styles/ComponentsStyles";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

const ModalEdit = ({ isOpen, closeModal, item, handleClick, UserPk }) => {
  if (!isOpen) {
    return null;
  }
  const [productNm, setPrductNm] = useState(item.productNm);
  const [categoryPk, setCategoryPk] = useState(item.categoryPk);
  const [memo, setMemo] = useState(item.memo);
  const [userPk, setUserPk] = useState(1);
  const handleChage = e => {
    const targetName = e.target.name;
    const integerCatePk = parseInt(categoryPk);
    const value = e.target.value;
    setCategoryPk(integerCatePk);
    // console.log(value);
    if (targetName === "product") {
      setPrductNm(value);
    } else if (targetName === "cate") {
      setCategoryPk(parseInt(value, 10));
    } else if (targetName === "memo") {
      setMemo(value);
    }
  };
  const handleAdd = () => {
    handleClick(item?.productPk, userPk, categoryPk, productNm, memo);
    closeModal();
  };
  console.log("modal", productNm, categoryPk, memo);
  return (
    <ModalBackStyle style={{ display: isOpen ? "block" : "none" }}>
      <CartModalStyle>
        <header>장바구니 목록 수정</header>
        <input
          placeholder="상품이름을 입력해주세요"
          value={productNm}
          name="product"
          onChange={e => {
            handleChage(e);
          }}
        />
        <select
          value={categoryPk}
          name="cate"
          onChange={e => {
            handleChage(e);
          }}
        >
          <option>카테고리를 선택해주세요</option>
          <option value={1}>기타</option>
          <option value={2}>생활용품</option>
          <option value={3}>식료품</option>
        </select>
        <input
          placeholder="메모를 입력해주세요"
          name="memo"
          value={memo}
          onChange={e => {
            handleChage(e);
          }}
        />
        {/* 추가 기능 및 글자출력 */}
        <SmallBtnStyles onClick={() => handleAdd()}>수정하기</SmallBtnStyles>

        <SmallBtnStyles onClick={closeModal}>취소하기</SmallBtnStyles>
      </CartModalStyle>
    </ModalBackStyle>
  );
};

export default ModalEdit;
