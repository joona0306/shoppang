import React, { useState } from "react";
import Modal from "./Modal";
import { SmallBtnStyles } from "../../styles/LayoutStyles";


const CartAddEdit = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <SmallBtnStyles onClick={openModal}>{props.btnAct}</SmallBtnStyles>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        btnAct={props.btnAct}
        handleClick={props.handleClick}
      >
        {props.btn}
      </Modal>
    </>
  );
};

export default CartAddEdit;
