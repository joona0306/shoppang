import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import SideBar from "../../components/sidebar/SideBar";
import {
  CardBut,
  CardText,
  CardTop,
  ContentCard,
  GoodDay,
  PageLayoutStyle,
  TitleStyle,
  UiIconStyle,
} from "../../styles/LayoutStyles";

const Event = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <UiIconStyle>
              <img
                src="/assets/images/header_images/heart.svg"
                alt="어바웃 이미지"
              />
            </UiIconStyle>
            <h2>쇼핑하기 좋은날</h2>
            <span>핫딜 상품을 추천 받아보세요</span>
          </TitleStyle>
          <GoodDay>
            <div className="left">
              <ContentCard>
                <ul>
                  <li>
                    <img
                      src="../assets/images/mart_images/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
                        <p>이마트-성서점</p>
                        <span>Subtitle</span>
                      </CardTop>
                      <CardBut>
                        <span>
                          Supporting or descriptive text for the card goes here
                          like a pro.
                        </span>
                        <button>BUTTON</button>
                        <button>BUTTON</button>
                      </CardBut>
                    </CardText>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="../assets/images/mart_images/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
                        <p>이마트-성서점</p>
                        <span>Subtitle</span>
                      </CardTop>
                      <CardBut>
                        <span>
                          Supporting or descriptive text for the card goes here
                          like a pro.
                        </span>
                        <button>BUTTON</button>
                        <button>BUTTON</button>
                      </CardBut>
                    </CardText>
                  </li>
                </ul>
              </ContentCard>
            </div>
            <div className="mid">
              <ContentCard>
                <ul>
                  <li>
                    <img
                      src="../assets/images/mart_images/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
                        <p>이마트-성서점</p>
                        <span>Subtitle</span>
                      </CardTop>
                      <CardBut>
                        <span>
                          Supporting or descriptive text for the card goes here
                          like a pro.
                        </span>
                        <button>BUTTON</button>
                        <button>BUTTON</button>
                      </CardBut>
                    </CardText>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="../assets/images/mart_images/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
                        <p>이마트-성서점</p>
                        <span>Subtitle</span>
                      </CardTop>
                      <CardBut>
                        <span>
                          Supporting or descriptive text for the card goes here
                          like a pro.
                        </span>
                        <button>BUTTON</button>
                        <button>BUTTON</button>
                      </CardBut>
                    </CardText>
                  </li>
                </ul>
              </ContentCard>
            </div>
            <div className="right">
              <ContentCard>
                <ul>
                  <li>
                    <img
                      src="../assets/images/mart_images/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
                        <p>이마트-성서점</p>
                        <span>Subtitle</span>
                      </CardTop>
                      <CardBut>
                        <span>
                          Supporting or descriptive text for the card goes here
                          like a pro.
                        </span>
                        <button>BUTTON</button>
                        <button>BUTTON</button>
                      </CardBut>
                    </CardText>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="../assets/images/mart_images/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
                        <p>이마트-성서점</p>
                        <span>Subtitle</span>
                      </CardTop>
                      <CardBut>
                        <span>
                          Supporting or descriptive text for the card goes here
                          like a pro.
                        </span>
                        <button>BUTTON</button>
                        <button>BUTTON</button>
                      </CardBut>
                    </CardText>
                  </li>
                </ul>
              </ContentCard>
            </div>
          </GoodDay>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Event;
