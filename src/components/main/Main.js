import styled from "@emotion/styled";
import React from "react";

const Main = ({ children }) => {
  const MainStyle = styled.main`
    position: relative;
    display: flex;
  `;
  return <MainStyle>{children}</MainStyle>;
};

export default Main;
