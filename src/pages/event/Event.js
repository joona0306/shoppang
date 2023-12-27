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
  UiIconStyle,
} from "../../styles/LayoutStyles";

const Event = ({ userPk, setUserPk, loginCheck, setLoginCheck }) => {
  return (
    <>
      <Header
        setLoginCheck={setLoginCheck}
        setUserPk={setUserPk}
        loginCheck={loginCheck}
      />
      <Main>
        <SideBar userPk={userPk} />
        <PageLayoutStyle>
          <TitleStyle>
            <UiIconStyle>
              <img
                src="/assets/images/header_images/heart.svg"
                alt="어바웃 이미지"
              />
            </UiIconStyle>
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
