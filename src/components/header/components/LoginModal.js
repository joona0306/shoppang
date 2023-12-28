import React, { useState } from "react";
import {
  CartModalStyle,
  ModalBackStyle,
} from "../../../styles/ComponentsStyles";
import { postSignin } from "../../../api/user/signin_api";
import styled from "@emotion/styled";
import { SmallBtnStyles } from "../../../styles/LayoutStyles";
import { useNavigate } from "react-router-dom";

const LoginForm = styled.form`
  b {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
  hr {
    margin-top: 10px;
  }
  div {
    display: flex;
    border: 1px solid #a8a8a8;
    border-radius: 5px;
    margin: 20px 0;
    input {
      border: none;
      margin: 0;
    }
    img {
      margin-left: 16px;
    }
  }
  .id-check {
    position: absolute;
    color: red;
    top: 50%;
  }
  .pw-check {
    position: absolute;
    color: red;
    top: 73%;
  }
`;

const LoginModal = ({
  isOpen,
  closeModal,
  children,
  setLoginCheck,
  setUserPk,
}) => {
  // 12-26 나중에 뺄것
  const [uid, setUid] = useState("string");
  const [upw, setUpw] = useState("string");
  const [hint, serHint] = useState(false);

  const handleChangeUid = e => {
    const value = e.target.value;
    setUid(value);
  };

  const handleChangeUpw = e => {
    const value = e.target.value;
    setUpw(value);
  };

  const handleSubit = e => {
    e.preventDefault();
    const obj = {
      uid: uid,
      upw: upw,
    };
    if (
      uid.replace(/\s/g, "").length > 0 &&
      upw.replace(/\s/g, "").length > 0
    ) {
      // console.log(obj);
      setUpw("");
      setUid("");
      serHint(false);
      closeModal(true);
      postSignin(obj, postResult, failFn);
    } else {
      serHint(true);
    }
  };
  const navigate = useNavigate();
  const failFn = () => {
    // alert("잠시 서버가 불안정합니다. \n다시 시도하세요.");
    navigate("/");
  };

  const postResult = num => {
    if (num === 1) {
      alert("team3님 반갑습니다");
      setLoginCheck(false);
      setUserPk(1);
    } else if (num === 0) {
      alert("앗, 로그인을 다시 시도해주세요");
    } else if (num === -1) {
      alert("서버 에러");
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <ModalBackStyle style={{ display: isOpen ? "block" : "none" }}>
      <CartModalStyle style={{ height: "293px" }}>
        <LoginForm onSubmit={handleSubit}>
          <b>로그인</b>
          <hr />
          <div>
            <img src="/assets/images/header_images/loginid.svg" />
            <input
              placeholder="이메일을 입력해주세요"
              name="uid"
              onChange={e => handleChangeUid(e)}
              value={uid}
            />
          </div>
          {hint && <p className="id-check">아이디를 입력하세요.</p>}
          <div>
            <img src="/assets/images/header_images/loginpw.svg" />
            <input
              placeholder="비밀번호를 입력해주세요"
              name="upw"
              type="password"
              onChange={e => handleChangeUpw(e)}
              value={upw}
            />
          </div>
          {hint && <p className="pw-check">비밀번호를 입력하세요.</p>}
          <SmallBtnStyles
            style={{
              height: 37,
              width: 93,
              marginLeft: "234px",
            }}
            type="submit"
          >
            {children}
          </SmallBtnStyles>
        </LoginForm>
      </CartModalStyle>
    </ModalBackStyle>
  );
};

export default LoginModal;
