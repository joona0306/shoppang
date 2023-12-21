import React, { useState } from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import Modal from "../modal/Modal";

const BtnEdit = ({ productNm, categoryPk, memo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SmallBtnStyles type="button" onClick={openModal}>
        수정
      </SmallBtnStyles>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        productNm={productNm}
        categoryPk={categoryPk}
        memo={memo}
      />
    </>
  );
};

export default BtnEdit;
