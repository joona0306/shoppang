import React, { useEffect, useState } from "react";

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
import { CardContainer } from "../../styles/ComponentsStyles";
import SearchFom from "../../components/header/components/SearchFom";
const initPlanData = [];
const CartCompleted = ({ userPk, setLoginCheck, setUserPk, loginCheck }) => {
  const [data, setData] = useState([]);
  const [planData, setPlanData] = useState(initPlanData);
  // 사용자 pk
  // const [userPk, setUserPk] = useState(1);
  // 보기방식 정의 장바구니 표시 설정
  const [choiceList, setChoiceList] = useState(2);
  //검색
  const [filters, setFilters] = useState(true);
  const [search, setSearch] = useState("");
  const searchData = planData.filter(
    item => item.productNm.replace(/\s/g, "") === search.replace(/\s/g, ""),
  );

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
  }, [userPk]);
  return (
    <>
      <Header
        setLoginCheck={setLoginCheck}
        setUserPk={setUserPk}
        loginCheck={loginCheck}
        setFilters={setFilters}
        search={search}
        setSearch={setSearch}
      />
      <Main>
        <SideBar userPk={userPk} />
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
          <ContainerStyle></ContainerStyle>
          <CardContainer>
            {filters &&
              planData.map(item => (
                <CardComplete key={item.productPk} item={item} />
              ))}
            {!filters &&
              searchData.map(item => (
                <CardComplete key={item.productPk} item={item} />
              ))}
          </CardContainer>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartCompleted;
