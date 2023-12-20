import React, { useState } from "react";
import { getProduct } from "../../api/product/product_api";
import BtnAll from "../../components/card/BtnAll";
import BtnComplete from "../../components/card/BtnComplete";
import BtnList from "../../components/card/BtnList";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import SideBar from "../../components/sidebar/SideBar";
import { ContainerStyle, PageLayoutStyle, TitleStyle } from "../../styles/LayoutStyles";


const CartAll = () => {
  const [data, setData] = useState([]);
  const handleClickGet = () => {
    getProduct(1, setData);
  };
  console.log(handleClickGet);
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
          <div></div>
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
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartAll;
