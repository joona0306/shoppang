import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import SideBar from "../../components/sidebar/SideBar";
import {
  AboutInfoStyle,
  PageLayoutStyle,
  TitleStyle,
  UiIconStyle,
} from "../../styles/LayoutStyles";

const About = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <AboutInfoStyle>
            <TitleStyle>
              <UiIconStyle>
                <img
                  src="/assets/images/header_images/about.svg"
                  alt="어바웃 이미지"
                />
              </UiIconStyle>
              <h2>서비스 소개</h2>
              <span>우리의 서비스를 소개합니다</span>
            </TitleStyle>
            <img src="/assets/images/about_images/about.png" alt="" />
          </AboutInfoStyle>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default About;
