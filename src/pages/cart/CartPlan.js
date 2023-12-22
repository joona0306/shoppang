import React, { useEffect, useState } from "react";
import { getProduct, postProduct } from "../../api/product/product_api";
import BtnAll from "../../components/card/BtnAll";
import BtnComplete from "../../components/card/BtnComplete";
import BtnList from "../../components/card/BtnList";
import CardForm from "../../components/card/CardForm";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import CartAddEdit from "../../components/modal/CartAddEdit";
import SideBar from "../../components/sidebar/SideBar";
import {
  ContainerStyle,
  PageLayoutStyle,
  TitleStyle,
  UiIconStyle,
} from "../../styles/LayoutStyles";

const initPlanData = [];
const CartPlan = () => {
  const [isModal, setIsModal] = useState(true);
  const [planData, setPlanData] = useState(initPlanData);
  // 사용자 pk
  const [userPk, setUserPk] = useState(1);
  // 보기방식 정의 장바구니 표시 설정
  const [choiceList, setChoiceList] = useState(1);

  const getAllProduct = () => {
    // console.log("구매예정 목록 불러왔다.");
    getProduct(userPk, choiceList, setPlanData);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const handleClickPlanGet = (productNm, categoryPk, memo) => {
    postProduct(
      {
        userPk: userPk,
        categoryPk: categoryPk,
        productNm: productNm,
        memo: memo,
      },
      getAllProduct,
    );
  };

  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <UiIconStyle>
              <img
                src="/assets/images/header_images/list.svg"
                alt="어바웃 이미지"
              />
            </UiIconStyle>
            <h2>장바구니 살목록</h2>
            <span>장바구니 목록을 추가하고 관리하세요</span>
            <CartAddEdit btnAct="등록하기" handleClick={handleClickPlanGet} />
          </TitleStyle>
          <ContainerStyle>
            {/* 페이지 버튼 삭제 */}
            {/* <BtnAll>
              <div onClick={handleClickPlanGet}></div>
            </BtnAll>
            <BtnList>
              <div onClick={handleClickPlanGet}></div>
            </BtnList>
            <BtnComplete>
              <div onClick={handleClickPlanGet}></div>
            </BtnComplete> */}
          </ContainerStyle>
          <div>
            {planData.map(item => (
              <CardForm key={item.productPk} item={item} />
            ))}
          </div>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartPlan;
