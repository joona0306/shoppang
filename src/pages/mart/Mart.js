import React from "react";
import Header from "../../components/header/Header.js";
import Main from "../../components/main/Main";
import SideBar from "../../components/sidebar/SideBar.js";
import {
  AboutInfoStyle,
  CardBut,
  CardString,
  CardTop,
  ContentCard,
  ContentLeft,
  ContentRight,
  Contents,
  Map,
  PageLayoutStyle,
  Store,
  TitleStyle,
  UiIconStyle,
} from "../../styles/LayoutStyles.js";

const Mart = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <UiIconStyle>
              <img
                src="/assets/images/header_images/store.svg"
                alt="어바웃 이미지"
              />
            </UiIconStyle>
            <h2>근처 매장찾기</h2>
            <span>근처 매장을 검색 하고 가까운 매장을 찾아보세요</span>
          </TitleStyle>
          <AboutInfoStyle>
            <img src="/assets/images/mart_images/mart_dummy.png" alt="" />
          </AboutInfoStyle>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Mart;
