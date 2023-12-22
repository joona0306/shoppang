import styled from "@emotion/styled";

export const Common = {
  // 숫자가 높을수록 어두운 색
  color: {
    primary: "#3FB139",
    p100: "#5BC855",
    p200: "#80D57B",
    p300: "#A5E1A2",
    p400: "#CAEDC9",
    p500: "#318A2D",
    p600: "#246420",
    p700: "#163D14",
    p800: "#081707",

    g100: "#F5F5F5",
    g200: "#DBDBDB",
    g300: "#C2C2C2",
    g400: "#A8A8A8",
    g500: "#8F8F8F",
    g600: "#757575",
    g700: "#5C5C5C",
    g800: "#424242",
    g900: "#424242",
  },
};

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export const PageLayoutStyle = styled.div`
  position: relative;
  width: 100%;
  padding: 28px 66px;
  margin-left: 40px;
`;

export const TitleStyle = styled.div`
  position: relative;
  display: flex;
  height: 50px;

  h2 {
    display: grid;
    align-items: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    color: #424242;
    /* line-height: 120%; */
    /* margin-bottom: 7px; */
  }
  span {
    display: grid;
    align-items: end;
    position: relative;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    /* line-height: 120%; */
    color: ${Common.color.g600};
    margin-bottom: 3px;
    margin-left: 16px;
  }
`;

export const UiIconStyle = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  align-items: center;
  /* justify-content: center; */
  img {
    position: relative;
    display: flex;
    width: 39px;
    height: 35px;
    margin-right: 9px;
    opacity: 80%;
  }
`;

export const LargeBtnStyles = styled.button`
  position: relative;
  width: 120px;
  height: 49px;
  border-radius: 24px;
  border: 1px solid ${Common.color.g600};
  margin-right: 15px;
  background-color: #fff;
  color: ${Common.color.g900};
  cursor: pointer;

  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &:hover {
    color: ${Common.color.p600};
    background-color: ${Common.color.p400};
  }

  &:active {
    color: #fff;
    background-color: ${Common.color.primary};
  }
`;

export const SmallBtnStyles = styled.button`
  position: relative;
  width: 80px;
  height: 37px;
  border-radius: 18px;
  border: 1px solid ${Common.color.g600};
  background-color: #fff;
  color: ${Common.color.g900};
  cursor: pointer;

  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &:hover {
    color: ${Common.color.p600};
    background-color: ${Common.color.p400};
  }

  &:active {
    color: #fff;
    background-color: ${Common.color.primary};
  }
`;

// 등록버튼 css
export const AddBtnStyles = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  bottom: 0;
  width: 90px;
  height: 38px;
  border-radius: 20px;
  /* border: 1px solid ${Common.color.g600}; */
  background-color: #3fb139;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${Common.color.p600};
    background-color: ${Common.color.p400};
  }

  &:active {
    background-color: #fff;
    color: ${Common.color.g900};
    border: 1px solid ${Common.color.g600};
  }
`;

export const ContainerStyle = styled.div`
  display: flex;
  position: relative;
  align-items: baseline;
`;

export const AboutInfoStyle = styled.div`
  .about-txet {
    display: flex;
    margin-bottom: 60px;
  }
  p {
    width: 312px;
    height: 63px;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .about-txet-img {
    width: 642px;
    height: 360px;
    margin-left: 95px;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    position: relative;
    width: 100%;
  }
`;

// event page style
export const CardBut = styled.div`
  position: relative;
  span {
    margin-bottom: 16px;
  }
  button {
    position: relative;
    width: 89px;
    height: 36px;
    color: #fff;
    background-color: #000;
    border-radius: 4px;
    margin-right: 12px;
    font-size: 14px;
  }
`;
export const CardText = styled.div`
  position: relative;
  padding: 16px;
`;
export const CardTop = styled.div`
  position: relative;
  margin-bottom: 16px;
  overflow: hidden;
`;
export const ContentCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    position: relative;
    display: flex;
    width: 328px;
    height: auto;
    border: 2px solid ${Common.color.g600};
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 30px;
    li {
      position: relative;

      img {
        position: relative;
        width: 328px;
        height: 184px;
        object-fit: cover;
      }
    }
  }
  p {
    position: relative;
    font-size: 20px;
  }
  span {
    position: relative;
    display: block;
    font-size: 14px;
    color: #666;
  }
`;
export const GoodDay = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 25px;
  height: auto;
  margin-top: 80px;
`;

// mart page style
export const Store = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 80px;
  gap: 50px;
`;
export const CardString = styled.div`
  position: relative;
  padding: 16px 30px;
`;
export const ContentLeft = styled.div`
  position: relative;
  img {
    overflow: hidden;
  }
`;
export const ContentRight = styled.div`
  position: relative;
  display: flex;
  ul {
    position: relative;
  }
`;
export const Contents = styled.div`
  position: relative;
  gap: 50px;
  display: flex;
  height: 575px;
`;
export const Map = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  img {
    position: relative;
    width: 342px;
    height: 575px;
    object-fit: cover;
  }
`;
