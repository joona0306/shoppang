import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import CartAll from "./pages/cart/CartAll";
import CartCompleted from "./pages/cart/CartCompleted";
import CartPlan from "./pages/cart/CartPlan";
import Event from "./pages/event/Event";
import Mart from "./pages/mart/Mart";
import { Wrap } from "./styles/LayoutStyles";

const App = () => {
  const [userPk, setUserPk] = useState(2);
  const [loginCheck, setLoginCheck] = useState(true);
  return (
    <Wrap maxw={1440}>
      <Routes>
        <Route path="*" element={<h1>404</h1>}></Route>
        <Route
          path="/"
          element={
            <About
              userPk={userPk}
              setLoginCheck={setLoginCheck}
              loginCheck={loginCheck}
              setUserPk={setUserPk}
            />
          }
        ></Route>
        <Route
          path="/about"
          element={
            <About
              userPk={userPk}
              setLoginCheck={setLoginCheck}
              loginCheck={loginCheck}
              setUserPk={setUserPk}
            />
          }
        ></Route>
        <Route
          path="/cart/cartall"
          element={
            <CartAll
              userPk={userPk}
              setUserPk={setUserPk}
              loginCheck={loginCheck}
              setLoginCheck={setLoginCheck}
            />
          }
        ></Route>
        <Route
          path="/cart/cartplan"
          element={
            <CartPlan
              userPk={userPk}
              setLoginCheck={setLoginCheck}
              loginCheck={loginCheck}
              setUserPk={setUserPk}
            />
          }
        ></Route>
        <Route
          path="/cart/cartcompleted"
          element={
            <CartCompleted
              userPk={userPk}
              setLoginCheck={setLoginCheck}
              loginCheck={loginCheck}
              setUserPk={setUserPk}
            />
          }
        ></Route>
        <Route
          path="/mart"
          element={
            <Mart
              userPk={userPk}
              setLoginCheck={setLoginCheck}
              loginCheck={loginCheck}
              setUserPk={setUserPk}
            />
          }
        ></Route>
        <Route
          path="/event"
          element={
            <Event
              userPk={userPk}
              setLoginCheck={setLoginCheck}
              loginCheck={loginCheck}
              setUserPk={setUserPk}
            />
          }
        ></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
