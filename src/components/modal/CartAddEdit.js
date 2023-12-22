import React, { useState } from "react";
import { AddBtnStyles } from "../../styles/LayoutStyles";
import Modal from "./Modal";

const CartAddEdit = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <AddBtnStyles onClick={openModal}>{props.btnAct}</AddBtnStyles>
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
