import React, { useState } from "react";
import { SmallBtnStyles } from "../../styles/LayoutStyles";
import Modal from "../modal/Modal";

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
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        item={item}
        handleClick={onClick}
      ></Modal>
    </>
  );
};

export default BtnEdit;
