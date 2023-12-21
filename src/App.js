import React from "react";
import { Route, Routes } from "react-router-dom";

import CardForm from "./components/card/CardForm";
import CardComplete from "./components/card/CardComplete";
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
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/" element={<About />} />
        <Route path="/cardform" element={<CardForm />} />
        <Route path="/cart/cartCompleted" element={<CartCompleted />} />

        <Route path="/about" element={<About />} />
        <Route path="/cart/cartall" element={<CartAll />} />
        <Route path="/cart/cartplan" element={<CartPlan />} />
        <Route path="/cart/cartcompleted" element={<CartCompleted />} />
        <Route path="/mart" element={<Mart />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Wrap>
  );
};

export default App;
