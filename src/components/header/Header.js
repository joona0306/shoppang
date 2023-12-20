import React from "react";
import { Link } from "react-router-dom";
import { HeaderHrStyle, HeaderTopBarStyle, HeaderTopFixStyle } from "../../styles/ComponentsStyles";
import { SmallBtnStyles } from "../../styles/LayoutStyles";



const Header = () => {
  return (
    <HeaderTopFixStyle>
      <HeaderTopBarStyle>
        <Link to="/cart/cartall">
          <div className="top-left">
            <img src="/assets/images/header_images/logo.svg" alt="log" />
            <h1>SHOPPANG</h1>
          </div>
        </Link>
        <div className="top-right">
          <SmallBtnStyles>로그인</SmallBtnStyles>
          <img src="/assets/images//header_images/Avatar.svg" alt="" />
        </div>
      </HeaderTopBarStyle>
      <HeaderHrStyle />
    </HeaderTopFixStyle>
  );
};

export default Header;
