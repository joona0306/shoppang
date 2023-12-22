import React, { useState } from "react";
import {
  CartModalStyle,
  ModalBackStyle,
  ModalBtnsStyle,
  ModalBtnsWrapStyle,
} from "../../styles/ComponentsStyles";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

const Modal = ({ isOpen, closeModal, children, btnAct, handleClick }) => {
  if (!isOpen) {
    return null;
  }
  const [productNm, setPrductNm] = useState("");
  const [categoryPk, setCategoryPk] = useState("");
  const [memo, setMemo] = useState("");
  const handleChage = e => {
    const targetName = e.target.name;
    const value = e.target.value;
    // console.log(value);
    if (targetName === "product") {
      setPrductNm(value);
    } else if (targetName === "cate") {
      setCategoryPk(value);
    } else if (targetName === "memo") {
      setMemo(value);
    }
  };
  return (
    <ModalBackStyle style={{ display: isOpen ? "block" : "none" }}>
      <CartModalStyle>
        <header>장바구니 목록 추가</header>
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
        <ModalBtnsStyle>
          <SmallBtnStyles
            onClick={() => handleClick(productNm, categoryPk, memo)}
          >
            등록하기
          </SmallBtnStyles>
          <SmallBtnStyles onClick={closeModal}>취소하기</SmallBtnStyles>
        </ModalBtnsStyle>
      </CartModalStyle>
    </ModalBackStyle>
  );
};

export default Modal;
