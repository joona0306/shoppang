import React, { useState } from "react";
import Modal from "./Modal";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

const CartAddEdit = ({ btnAct, handleClick, btn }) => {
  console.log("CartAddEdit", handleClick);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <SmallBtnStyles onClick={openModal}>{btnAct}</SmallBtnStyles>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        btnAct={btnAct}
        handleClick={handleClick}
      >
        {btn}
      </Modal>
    </>
  );
};

export default CartAddEdit;
