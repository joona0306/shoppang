import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import CartAll from "./pages/cart/CartAll";
import CartCompleted from "./pages/cart/CartCompleted";
import CartPlan from "./pages/cart/CartPlan";
import Event from "./pages/event/Event";
import Mart from "./pages/mart/Mart";
import { Wrap } from "./styles/LayoutStyles";


const App = () => {
  return (
    <Wrap maxw={1440}>
      <Routes>
        <Route path="*" element={<h1>404</h1>}></Route>
        <Route path="/" element={<CartAll />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart/cartall" element={<CartAll />}></Route>
        <Route path="/cart/cartplan" element={<CartPlan />}></Route>
        <Route path="/cart/cartcompleted" element={<CartCompleted />}></Route>
        <Route path="/mart" element={<Mart />}></Route>
        <Route path="/event" element={<Event />}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
