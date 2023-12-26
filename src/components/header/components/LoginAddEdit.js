import React, { useState } from "react";
import { SmallBtnStyles } from "../../../styles/LayoutStyles";
import LoginModal from "./LoginModal";

const LoginAddEdit = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <SmallBtnStyles onClick={openModal}>{props.btnAct}</SmallBtnStyles>
      <LoginModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        btnAct={props.btnAct}
        handleClick={props.handleClick}
        setLoginCheck={props.setLoginCheck}
        setUserPk={props.setUserPk}
      >
        {props.btn}
      </LoginModal>
    </>
  );
};

export default LoginAddEdit;
