import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Archive from "./pages/archive";
import Splash from "./pages/splash";
import "./css/app.css";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route path="/main" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
};

export default App;
