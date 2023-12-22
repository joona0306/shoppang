import React, { useEffect, useState } from "react";
import { getProduct, postProduct } from "../../api/product/product_api";
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
import CardForm from "../../components/card/CardForm";
import CardComplete from "../../components/card/CardComplete";
import CartAddEdit from "../../components/modal/CartAddEdit";
const initPlanData = [];
const CartAll = () => {
  const [data, setData] = useState([]);
  const [planData, setPlanData] = useState(initPlanData);
  // 사용자 pk
  const [userPk, setUserPk] = useState(1);
  // 보기방식 정의 장바구니 표시 설정
  const [choiceList, setChoiceList] = useState(0);

  const handleClickGet = () => {
    getProduct(1, setData);
  };
  // console.log(handleClickGet);
  const getAllProduct = () => {
    // console.log("전체목록 불러왔다.");
    getProduct(userPk, choiceList, setPlanData);
  };

  const showList = () => {
    return planData.map(item =>
      item.buyingCheck === 0 ? (
        <CardForm key={item.productPk} item={item} />
      ) : (
        <CardComplete key={item.productPk} item={item} />
      ),
    );
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
        <div>
          {data.map(item => (
            <div key={item.getproduct}>
              <p>{item.productPk} </p>
              <p>{item.productNm} </p>
              <p>{item.categoryNm} </p>
              <p>{item.memo} </p>
            </div>
          ))}
        </div>
        <PageLayoutStyle>
          <TitleStyle>
            <UiIconStyle>
              <img
                src="/assets/images/header_images/all.svg"
                alt="어바웃 이미지"
              />
            </UiIconStyle>
            <h2>장바구니 모든목록</h2>
            <span>장바구니 목록을 추가하고 관리하세요</span>
            <CartAddEdit btnAct="등록하기" handleClick={handleClickPlanGet} />
          </TitleStyle>
          <ContainerStyle>
            {/* 페이지 버튼 삭제 */}
            {/* <BtnAll>
              <div
                onClick={() => {
                  handleClickGet();
                }}
              ></div>
            </BtnAll>
            <BtnList />
            <BtnComplete /> */}
          </ContainerStyle>
          <div>{showList()}</div>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartAll;
