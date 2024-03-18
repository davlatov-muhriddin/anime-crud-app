import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Header from "./components/header/Header";
import Detail from "./pages/detail/Detail";
import Edit from "./pages/edit/Edit";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
    </div>
  );
}

export default App;
