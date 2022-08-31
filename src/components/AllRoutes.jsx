import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Orders } from "../pages/Orders";
import { Product } from "../pages/Product";
import { Products } from "../pages/Products";
import { AuthWrapper } from "./AuthWrapper";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route
          path="/cart"
          element={
            <AuthWrapper>
              <Cart />
            </AuthWrapper>
          }
        ></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};
