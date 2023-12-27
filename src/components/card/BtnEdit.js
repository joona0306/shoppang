import React, { useState } from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import ModalEdit from "../modal/ModalEdit";

import { getCategory } from "../../api/category/category_api";
const BtnEdit = ({ item, onClick, categoryPk, handleEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = event => {
    event.stopPropagation();

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getcateProduct = () => {
    getCategory(categoryPk);
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
        categoryPk={getCategory}
        handleClick={onClick}
      />
    </>
  );
};

export default BtnEdit;
