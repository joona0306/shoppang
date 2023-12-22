import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import SideBar from "../../components/sidebar/SideBar";
import {
  AboutInfoStyle,
  CardBut,
  CardText,
  CardTop,
  ContentCard,
  GoodDay,
  PageLayoutStyle,
  TitleStyle,
} from "../../styles/LayoutStyles";

const Event = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <h2>쇼핑하기 좋은날</h2>
            <span>핫딜 상품을 추천 받아보세요</span>
          </TitleStyle>
          <AboutInfoStyle>
            <img src="/assets/images/mart_images/event_dummy.png" alt="" />
          </AboutInfoStyle>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Event;
