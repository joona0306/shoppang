import { Link } from "react-router-dom";
import {
  HeaderHrStyle,
  HeaderTopBarStyle,
  HeaderTopFixStyle,
} from "../../styles/ComponentsStyles";
import LoginAddEdit from "./components/LoginAddEdit";
import { SmallBtnStyles } from "../../styles/LayoutStyles";

const Header = ({ setUserPk, loginCheck, setLoginCheck }) => {
  const handleLogin = () => {
    setLoginCheck(true);
    setUserPk(2);
  };
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
          {loginCheck ? (
            <LoginAddEdit
              btnAct="로그인"
              btn="로그인"
              setLoginCheck={setLoginCheck}
              setUserPk={setUserPk}
            />
          ) : (
            <SmallBtnStyles onClick={handleLogin}>로그아웃</SmallBtnStyles>
          )}
        </div>
      </HeaderTopBarStyle>
      <HeaderHrStyle />
    </HeaderTopFixStyle>
  );
};

export default Header;
