import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { NotFoundPage } from "./NotFoundPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { ProductsPage } from "./ProductsPage";

export const RoutesBox = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exect element={<HomePage /> } />
        <Route path="/products" exect element={<ProductsPage /> } />
        <Route path="/products/:id" exect element={<ProductsDetailsPage/> } />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      {/* Add Routes here */}
    </>
  );
};
