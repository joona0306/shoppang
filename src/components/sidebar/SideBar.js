import React from "react";
import { Link } from "react-router-dom";
import {
  AboutStyle,
  BasketStyle,
  EventStyle,
  LoginStyle,
  ShoppingStyle,
  SideBarStyle,
  SideBarWrapStyle,
} from "../../styles/ComponentsStyles";

const SideBar = () => {
  // const [isHovered, setIsHovered] = useState(false) ;
  return (
    <>
      <SideBarStyle>
        <SideBarWrapStyle>
          <LoginStyle>
            <img src="../assets/images/header_images/Avatar.svg" alt="login" />
            <br />
            <div>
              <p>로그인</p>
              <span>이메일로 회원가입 하기</span>
            </div>
          </LoginStyle>
          <AboutStyle>
            <p>소개</p>
            <Link to="/about">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img
                    src="../assets/images/header_images/about.svg"
                    alt="about"
                  />
                  <span>About</span>
                </li>
              </ul>
            </Link>
          </AboutStyle>
          <BasketStyle>
            <p>장바구니</p>
            <Link to="/cart/cartplan">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img
                    src="../assets/images/header_images/list.svg"
                    alt="about"
                  />
                  <span>장볼것</span>
                </li>
              </ul>
            </Link>
            <Link to="/cart/cartCompleted">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img
                    src="../assets/images/header_images/cart.svg"
                    alt="cart"
                  />
                  <span>장본것</span>
                </li>
              </ul>
            </Link>
            <Link to="/cart/cartall">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img src="../assets/images/header_images/all.svg" alt="all" />
                  <span>모두보기</span>
                </li>
              </ul>
            </Link>
          </BasketStyle>
          <ShoppingStyle>
            <p>쇼핑하기</p>
            <Link to="/mart">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img src="../assets/images/header_images/store.svg" alt="" />
                  <span>근처 매장찾기</span>
                </li>
              </ul>
            </Link>
          </ShoppingStyle>
          <EventStyle>
            <p>이벤트</p>
            <Link to="/event">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img src="../assets/images/header_images/heart.svg" alt="" />
                  <span>쇼핑하기 좋은 날</span>
                </li>
              </ul>
            </Link>
            <Link to="/event">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img src="../assets/images/header_images/notice.svg" alt="" />
                  <span>게시판</span>
                </li>
              </ul>
            </Link>
            <Link to="/event">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img src="../assets/images/header_images/app.svg" alt="" />
                  <span>비즈니스 앱</span>
                </li>
              </ul>
            </Link>
          </EventStyle>
        </SideBarWrapStyle>
      </SideBarStyle>
    </>
  );
};

export default SideBar;
