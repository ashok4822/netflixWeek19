import * as React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ProductDetailPage from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/productdetail" element={<ProductDetailPage/>}/>
    </Routes>
  );
}

export default App;