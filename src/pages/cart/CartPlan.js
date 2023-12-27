import React, { useEffect, useState } from "react";
import {
  getProduct,
  postProduct,
  deleteProduct,
} from "../../api/product/product_api";

import CardForm from "../../components/card/CardForm";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import CartAdd from "../../components/modal/CartAdd";
import SideBar from "../../components/sidebar/SideBar";
import {
  ContainerStyle,
  PageLayoutStyle,
  TitleStyle,
  UiIconStyle,
} from "../../styles/LayoutStyles";
import { CardContainer } from "../../styles/ComponentsStyles";
import SearchFom from "../../components/header/components/SearchFom";

const initPlanData = [];
const CartPlan = ({ userPk, setLoginCheck, setUserPk, loginCheck }) => {
  const [isModal, setIsModal] = useState(true);
  const [planData, setPlanData] = useState(initPlanData);
  //검색
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(true);
  const searchData = planData.filter(
    item => item.productNm.replace(/\s/g, "") === search.replace(/\s/g, ""),
  );

  // 사용자 pk
  // const [userPk, setUserPk] = useState(1);
  // 보기방식 정의 장바구니 표시 설정

  const [choiceList, setChoiceList] = useState(1);

  const getPlanProduct = () => {
    // getCategory(setCategoryData);
    // console.log("전체목록 불러왔다.");
    getProduct(userPk, choiceList, setPlanData);
  };
  const handleDeleteProduct = async (event, _pk) => {
    // alert(_pk);
    // alert(event);

    event.stopPropagation();
    try {
      await deleteProduct(userPk, _pk);
      // window.location.reload();
      alert("카드가 삭제되었습니다");
      getPlanProduct();
    } catch (error) {
      console.error("Failed to delete the product", error);
    }
  };

  useEffect(() => {
    getPlanProduct();
  }, [userPk]);

  const handleClickPlanGet = (productNm, categoryPk, memo) => {
    postProduct(
      {
        userPk: userPk,
        categoryPk: categoryPk,
        productNm: productNm,
        memo: memo,
      },
      getPlanProduct,
    );
  };

  return (
    <>
      <Header
        setLoginCheck={setLoginCheck}
        setUserPk={setUserPk}
        loginCheck={loginCheck}
        setFilters={setFilters}
        search={search}
        setSearch={setSearch}
        showSearchForm={true}
      />
      <Main>
        <SideBar userPk={userPk} />
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
            <CartAdd btnAct="등록하기" handleClick={handleClickPlanGet} />
          </TitleStyle>
          <ContainerStyle> </ContainerStyle>
          <CardContainer>
            {filters &&
              planData.map(item => (
                <CardForm
                  key={item.productPk}
                  item={item}
                  getAllProduct={getPlanProduct}
                  handleDeleteProduct={handleDeleteProduct}
                />
              ))}
            {!filters &&
              searchData.map(item => (
                <CardForm
                  key={item.productPk}
                  item={item}
                  getAllProduct={getPlanProduct}
                  handleDeleteProduct={handleDeleteProduct}
                />
              ))}
          </CardContainer>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartPlan;
