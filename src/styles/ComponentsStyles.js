import styled from "@emotion/styled";
import { Common } from "./LayoutStyles";
import { NavLink } from "react-router-dom";

// Card Component Style
export const CardBox = styled.div`
  position: relative;
  width: 328px;
  height: 180px;
  margin: 32px 40px 0px 0;
  border: 1px solid ${Common.color.g600};
  border-radius: 8px;
  cursor: pointer;
`;
export const CardEnd = styled.div`
  position: relative;
  height: 115px;

  background: #a8a8a8;
  opacity: 0.4;

  border-radius: 8px 8px 0px 0px;
`;
export const DateText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 42px;
  font-weight: 700;
  line-height: 50px;
  color: #fff;
`;
export const Heading = styled.h2`
  height: 24px;
  padding: 16px 0px 0px 16px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
`;
export const Category = styled.p`
  height: 17px;
  padding: 20px 0px 16px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  color: #757575;
`;
export const Memo = styled.p`
  padding: 10px 16px 0px 16px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;

  color: #757575;
`;
export const CardFormBtn = styled.div`
  display: flex;
  gap: 12px;

  padding: 12px 0px 0px 16px;
`;
export const CardCompleteBtn = styled.div`
  padding: 12px 0px 0px 16px;
`;

// Header Component Style
export const HeaderBtStyle = styled.button`
  background: none;
  color: ${Common.color.g900};
  padding: 4px 16px;
  width: 70px;
  height: 32px;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  border: 1px solid #1a1a1a;
  :hover {
    background: ${Common.color.g400};
    color: white;
    border: none;
  }
`;
export const HeaderHrStyle = styled.hr`
  color: ${Common.color.g600};
  width: 100vw;
  box-sizing: border-box;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`;
export const HeaderTopBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  .top-left {
    display: flex;
    align-items: center;
    gap: 5px;

    img {
      width: 68px;
      cursor: pointer;
    }
    h1 {
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
      color: ${Common.color.primary};
    }
  }
  .top-right {
    display: flex;
    align-items: center;
    gap: 6px;
    img {
      cursor: pointer;
    }
  }
`;
export const HeaderTopFixStyle = styled.header`
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
`;

// Modal Component Style
export const CartModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: "auto";
  padding: 30px;
  width: 388px;
  height: 361px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${Common.color.g500};
  background-color: #fff;

  header {
    position: relative;
    padding-bottom: 11px;
    border-bottom: 1px solid ${Common.color.g500};
    font-size: 24px;
    font-weight: bold;
    color: ${Common.color.g900};
  }
  input {
    position: relative;
    width: 100%;
    height: 48px;
    padding: 12px 16px;
    margin: 20px 0;
    font-size: 16px;
    border: 1px solid ${Common.color.g300};
    border-radius: 4px;
  }

  select {
    position: relative;
    width: 100%;
    height: 48px;
    padding: 6px 16px;
    font-size: 16px;
    appearance: none;
    color: ${Common.color.g600};
    border: 1px solid ${Common.color.g300};
    border-radius: 4px;
  }
  option {
    position: relative;
    padding: 11px 16px;
    font-size: 16px;
  }

  button {
    position: relative;
    /* margin-left: 237px; */
    width: 90px;
    height: 34px;
    margin-left: 10px;
  }
`;
export const ModalBtnsStyle = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
`;

export const ModalBackStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
`;

// SideBar Component Style

export const LoginStyle = styled.div`
  position: relative;
  width: 220px;
  height: auto;
  padding: 16px;
  img {
    position: relative;
    margin-top: 12px;
  }
  p {
    position: relative;
    font-size: 20px;
    margin-top: 24px;
    cursor: pointer;
  }
  span {
    position: relative;
    color: #666;
    line-height: 24px;
    cursor: pointer;
  }
`;
export const MenuStyle = styled.div`
  position: relative;
  width: 220px;
  height: auto;
  padding: 16px;

  p {
    position: relative;
    color: #666;
  }
  li {
    position: relative;
    width: 195px;
    height: auto;
    border-radius: 8px;
    cursor: pointer;

    /* opacity: 35%; */

    span {
      position: relative;
      z-index: 1;
      margin-left: 16px;
    }
    img {
      position: relative;
      left: 16px;
      width: 20px;
      height: 20px;
      opacity: 35%;
    }
  }
`;
export const SelectMenu = styled(NavLink)`
  position: absolute;
  display: flex;
  width: 195px;
  height: 32px;
  border-radius: 8px;
  left: -16px;
  display: flex;
  align-items: center;
  background-color: #fff;

  &:hover {
    background-color: #dddd;
    img {
      z-index: 1;
      opacity: 100%;
    }
  }
  &.active {
    background-color: #dddd;
    img {
      z-index: 1;
      opacity: 100%;
    }
  }
`;
export const SideBarStyle = styled.section`
  position: relative;
  width: 245px;
  height: 950px;
`;
export const SideBarWrapStyle = styled.div`
  position: fixed;
  width: 220px;
  height: 100%;
  margin-left: 25px;
  font-size: 14px;
  border-right: 1px solid ${Common.color.g600};

  ul {
    position: relative;
    li {
      position: relative;
      display: flex;
      /* padding-top: 10px; */
      height: 32px;
      align-items: center;
      margin-top: 16px;
      img {
        margin-right: 16px;
      }
    }
  }
`;
