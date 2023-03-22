//import Dangnhap from "./pages/Dangnhap/Dangnhap";
//import { useEffect, useState } from "react";
import Dangki from "./pages/Dangki/Dangki";
import DangNhap from "./pages/Dangnhap/Dangnhap";
//import Taocauhoi from "./pages/Taocauhoi/Taocauhoi";
//import Vong1 from "./pages/Vong1/Vong1";
//import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dangki />} />
      <Route path="/demo" element={<DangNhap />} />
    </Routes>
  );
}

export default App;
