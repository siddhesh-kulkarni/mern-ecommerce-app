import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} exact={true} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
