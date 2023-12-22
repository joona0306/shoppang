import React, { useEffect, useState } from "react";
import { getProduct } from "../../api/product/product_api";
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
} from "../../styles/LayoutStyles";
import CardForm from "../../components/card/CardForm";
import CardComplete from "../../components/card/CardComplete";
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
  console.log(handleClickGet);
  const getAllProduct = () => {
    console.log("전체목록 불러왔다.");
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
            <h2>장바구니 모든목록</h2>
            <span>장바구니 목록을 추가하고 관리하세요</span>
          </TitleStyle>
          <ContainerStyle>
            <BtnAll>
              <div
                onClick={() => {
                  handleClickGet();
                }}
              ></div>
            </BtnAll>
            <BtnList />
            <BtnComplete />
          </ContainerStyle>
          <div>{showList()}</div>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartAll;
