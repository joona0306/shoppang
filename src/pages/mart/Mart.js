import React from "react";
import Header from "../../components/header/Header.js";
import Main from "../../components/main/Main";
import SideBar from "../../components/sidebar/SideBar.js";
import {
  CardBut,
  CardString,
  CardTop,
  ContentCard,
  ContentLeft,
  ContentRight,
  Contents,
  Map,
  PageLayoutStyle,
  Store,
  TitleStyle,
  UiIconStyle,
} from "../../styles/LayoutStyles.js";

const Mart = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <UiIconStyle>
              <img
                src="/assets/images/header_images/store.svg"
                alt="어바웃 이미지"
              />
            </UiIconStyle>
            <h2>근처 매장찾기</h2>
            <span>근처 매장을 검색 하고 가까운 매장을 찾아보세요</span>
          </TitleStyle>
          <Store>
            <Map>
              <img src="../assets/images/mart_images/map.svg" alt="map" />
            </Map>
            <Contents>
              <ContentLeft>
                <ContentCard>
                  <ul>
                    <li>
                      <img
                        src="../assets/images/mart_images/emart.jpg"
                        alt="emart"
                      />
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                </ContentCard>
              </ContentLeft>
              <ContentRight>
                <ContentCard>
                  <ul>
                    <li>
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                </ContentCard>
              </ContentRight>
            </Contents>
          </Store>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Mart;
