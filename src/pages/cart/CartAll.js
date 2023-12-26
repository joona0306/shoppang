import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  getProduct,
  postProduct,
} from "../../api/product/product_api";

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
import CartAdd from "../../components/modal/CartAdd";
import { CardContainer } from "../../styles/ComponentsStyles";
import SearchFom from "../../components/card/SearchFom";
import { getCategory } from "../../api/category/category_api";

const initPlanData = [];
const CartAll = ({ userPk, setUserPk, loginCheck, setLoginCheck }) => {
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [planData, setPlanData] = useState(initPlanData);
  // 사용자 pk
  // const [userPk, setUserPk] = useState(1);
  // 보기방식 정의 장바구니 표시 설정
  const [choiceList, setChoiceList] = useState(0);
  //검색
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(true);
  const searchData = planData.filter(
    item => item.productNm.replace(/\s/g, "") === search.replace(/\s/g, ""),
  );

  // console.log(handleClickGet);
  const getAllProduct = () => {
    // getCategory(setCategoryData);
    console.log("전체목록 불러왔다.");
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
      getAllProduct();
    } catch (error) {
      console.error("Failed to delete the product", error);
    }
  };

  const showListFilter = () => {
    return searchData.map(item =>
      item.buyingCheck === 0 ? (
        <CardForm
          key={item.productPk}
          item={item}
          getAllProduct={getAllProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
      ) : (
        <CardComplete
          key={item.productPk}
          item={item}
          getAllProduct={getAllProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
      ),
    );
  };

  const showList = () => {
    return planData.map(item =>
      item.buyingCheck === 0 ? (
        <CardForm
          key={item.productPk}
          item={item}
          getAllProduct={getAllProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
      ) : (
        <CardComplete
          key={item.productPk}
          item={item}
          getAllProduct={getAllProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
      ),
    );
  };
  useEffect(() => {
    getAllProduct();
  }, [userPk]);

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
      <Header
        setUserPk={setUserPk}
        loginCheck={loginCheck}
        setLoginCheck={setLoginCheck}
      />
      <SearchFom
        setFilters={setFilters}
        search={search}
        setSearch={setSearch}
      />
      <Main>
        <SideBar userPk={userPk} />
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
            <CartAdd btnAct="등록하기" handleClick={handleClickPlanGet} />
          </TitleStyle>
          <ContainerStyle></ContainerStyle>
          {filters && <CardContainer>{showList()}</CardContainer>}
          {!filters && <CardContainer>{showListFilter()}</CardContainer>}
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartAll;
