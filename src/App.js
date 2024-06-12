import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./app/store";
import PongApp from "./components/PongApp";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import "../src/index.css";
import "../src/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="appContainer">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/PingPong" element={<PongApp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
