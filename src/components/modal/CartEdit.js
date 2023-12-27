import React, { useState } from "react";
import ModalEdit from "./ModalEdit";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

const CartEdit = ({ btnAct, handleClick, btn }) => {
  // console.log("CartAddEdit", handleClick);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <SmallBtnStyles onClick={openModal}>{btnAct}</SmallBtnStyles>
      <ModalEdit
        isOpen={isModalOpen}
        closeModal={closeModal}
        btnAct={btnAct}
        handleClick={handleClick}
      >
        {btn}
      </ModalEdit>
    </>
  );
};

export default CartEdit;
