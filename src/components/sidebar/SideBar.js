import React from "react";
import {
  LoginStyle,
  MenuStyle,
  SelectMenu,
  SideBarStyle,
  SideBarWrapStyle,
} from "../../styles/ComponentsStyles";

// 사이드바 메뉴
const SideBar = () => {
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
          {/* 서비스 소개 */}
          <MenuStyle>
            <p>Abbout</p>
            <ul>
              <li>
                <SelectMenu to="/about">
                  <img
                    src="../assets/images/header_images/about.svg"
                    alt="about"
                  />
                  <span>서비스 소개</span>
                </SelectMenu>
              </li>
            </ul>
          </MenuStyle>
          {/* 장바구니 */}
          <MenuStyle>
            <p>장바구니</p>
            {/* 모두보기 */}
            <ul>
              <li>
                <SelectMenu to="/cart/cartall">
                  <img
                    src="../assets/images/header_images/all.svg"
                    alt="about"
                  />
                  <span>모두보기</span>
                </SelectMenu>
              </li>
            </ul>
            {/* 장볼거 */}
            <ul>
              <li>
                <SelectMenu to="/cart/cartplan">
                  <img
                    src="../assets/images/header_images/list.svg"
                    alt="about"
                  />
                  <span>장볼것</span>
                </SelectMenu>
              </li>
            </ul>
            {/* 장본것 */}
            <ul>
              <li>
                <SelectMenu to="/cart/cartCompleted">
                  <img
                    src="../assets/images/header_images/cart.svg"
                    alt="cart"
                  />
                  <span>장본것</span>
                </SelectMenu>
              </li>
            </ul>
          </MenuStyle>
          {/* 쇼핑하기 */}
          <MenuStyle>
            <p>쇼핑하기</p>
            <ul>
              <li>
                <SelectMenu to="/mart">
                  <img src="../assets/images/header_images/store.svg" alt="" />
                  <span>근처 매장찾기</span>
                </SelectMenu>
              </li>
            </ul>
          </MenuStyle>
          {/* 이벤트 */}
          <MenuStyle>
            <p>이벤트</p>
            <ul>
              <li>
                <SelectMenu to="/event">
                  <img src="../assets/images/header_images/heart.svg" alt="" />
                  <span>쇼핑하기 좋은 날</span>
                </SelectMenu>
              </li>
            </ul>
            <ul>
              <li>
                <SelectMenu to="*">
                  <img src="../assets/images/header_images/notice.svg" alt="" />
                  <span>게시판</span>
                </SelectMenu>
              </li>
            </ul>
            <ul>
              <li>
                <SelectMenu to="*">
                  <img src="../assets/images/header_images/app.svg" alt="" />
                  <span>비즈니스 앱</span>
                </SelectMenu>
              </li>
            </ul>
          </MenuStyle>
        </SideBarWrapStyle>
      </SideBarStyle>
    </>
  );
};

export default SideBar;
