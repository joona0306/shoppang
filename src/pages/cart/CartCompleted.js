import React, { useEffect, useState } from "react";
import BtnAll from "../../components/card/BtnAll";
import BtnComplete from "../../components/card/BtnComplete";
import BtnList from "../../components/card/BtnList";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import SideBar from "../../components/sidebar/SideBar";
import {
  ContainerStyle,
  PageLayoutStyle,
  TitleStyle,
  UiIconStyle,
} from "../../styles/LayoutStyles";
import { getProduct } from "../../api/product/product_api";
import CardComplete from "../../components/card/CardComplete";
const initPlanData = [];
const CartCompleted = () => {
  const [data, setData] = useState([]);
  const [planData, setPlanData] = useState(initPlanData);
  // 사용자 pk
  const [userPk, setUserPk] = useState(1);
  // 보기방식 정의 장바구니 표시 설정
  const [choiceList, setChoiceList] = useState(2);

  const handleClickGet = () => {
    getProduct(1, setData);
  };
  // console.log(handleClickGet);
  const getAllProduct = () => {
    // console.log("구매확정 목록 불러왔다.");
    getProduct(userPk, choiceList, setPlanData);
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <UiIconStyle>
              <img
                src="/assets/images/header_images/cart.svg"
                alt="어바웃 이미지"
              />
            </UiIconStyle>
            <h2>장바구니 목록</h2>
            <span>장바구니 목록을 추가하고 관리하세요</span>
          </TitleStyle>
          <ContainerStyle>
            {/* 페이지 버튼 삭제 */}
            {/* <BtnAll />
            <BtnList />
            <BtnComplete /> */}
          </ContainerStyle>
          <div>
            {planData.map(item => (
              <CardComplete key={item.productPk} item={item} />
            ))}
          </div>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartCompleted;
