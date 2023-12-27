import React, { useState, useEffect } from "react";
import { CartModalStyle, ModalBackStyle } from "../../styles/ComponentsStyles";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

const ModalEdit = ({ isOpen, closeModal, item, handleClick }) => {
  const [productNm, setProductNm] = useState(item.productNm);
  const [categoryPk, setCategoryPk] = useState(item.categoryPk);
  const [memo, setMemo] = useState(item.memo);
  const [userPk, setUserPk] = useState(1);

  const handleModalClick = e => {
    e.stopPropagation();
  };

  useEffect(() => {
    setCategoryPk(item.categoryPk);
    setProductNm(item.productNm);

    setMemo(item.memo);
    setUserPk(1);
  }, [isOpen, item]);

  const handleChange = e => {
    const targetName = e.target.name;
    const value = e.target.value;

    if (targetName === "product") {
      setProductNm(value);
    } else if (targetName === "cate") {
      setCategoryPk(value);
    } else if (targetName === "memo") {
      setMemo(value);
    }
  };

  const handleAdd = () => {
    handleClick(item?.productPk, userPk, categoryPk, productNm, memo);
    closeModal();
  };
  return (
    <ModalBackStyle style={{ display: isOpen ? "block" : "none" }}>
      <CartModalStyle onClick={handleModalClick}>
        <header>장바구니 목록 수정</header>
        <input
          placeholder="상품 이름을 입력해주세요"
          value={productNm}
          name="product"
          onChange={e => {
            handleChange(e);
          }}
        />
        <select
          value={categoryPk}
          name="cate"
          onChange={e => {
            handleChange(e);
          }}
        >
          <option>카테고리를 선택해주세요</option>
          <option value={1}>기타</option>
          <option value={2}>생필품</option>
          <option value={3}>식료품</option>
        </select>
        <input
          placeholder="메모를 입력해주세요"
          name="memo"
          value={memo}
          onChange={e => {
            handleChange(e);
          }}
        />
        <SmallBtnStyles onClick={() => handleAdd()}>수정하기</SmallBtnStyles>
        <SmallBtnStyles onClick={closeModal}>취소하기</SmallBtnStyles>
      </CartModalStyle>
    </ModalBackStyle>
  );
};

export default ModalEdit;
