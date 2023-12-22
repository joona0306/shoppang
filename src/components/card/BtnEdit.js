import React, { useState } from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

import ModalEdit from "../modal/ModalEdit";

const BtnEdit = ({ item, onClick }) => {
  console.log("아이템", item);
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
      <ModalEdit
        isOpen={isModalOpen}
        closeModal={closeModal}
        item={item}
        handleClick={onClick}
      ></ModalEdit>
    </>
  );
};

export default BtnEdit;
