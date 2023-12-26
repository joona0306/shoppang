import React, { useState } from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import ModalEdit from "../modal/ModalEdit";

const BtnEdit = ({ item, onClick, categoryPk }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [categoryPke, setCategoryPk] = useState(item.categoryPk);
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
      <ModalEdit
        isOpen={isModalOpen}
        closeModal={closeModal}
        item={item}
        categoryPk={categoryPk}
        handleClick={onClick}
      />
    </>
  );
};

export default BtnEdit;
