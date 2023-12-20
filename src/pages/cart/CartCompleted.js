import React from "react";
import BtnAll from "../../components/card/BtnAll";
import BtnComplete from "../../components/card/BtnComplete";
import BtnList from "../../components/card/BtnList";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import SideBar from "../../components/sidebar/SideBar";
import { ContainerStyle, PageLayoutStyle, TitleStyle } from "../../styles/LayoutStyles";


const CartCompleted = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <h2>장바구니 목록</h2>
            <span>장바구니 목록을 추가하고 관리하세요</span>
          </TitleStyle>
          <ContainerStyle>
            <BtnAll />
            <BtnList />
            <BtnComplete />
          </ContainerStyle>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartCompleted;
