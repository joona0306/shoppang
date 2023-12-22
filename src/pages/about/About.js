import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import SideBar from "../../components/sidebar/SideBar";
import {
  AboutInfoStyle,
  PageLayoutStyle,
  TitleStyle,
} from "../../styles/LayoutStyles";

const About = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <h2>About service</h2>
            <span>우리의 서비스를 소개합니다</span>
          </TitleStyle>
          <AboutInfoStyle>
            <img src="/assets/images/about_images/about.png" alt="" />
          </AboutInfoStyle>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default About;
