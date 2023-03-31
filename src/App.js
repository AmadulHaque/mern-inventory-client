import React,{Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CategoryCreateUpdatePage from './pages/Category/CategoryCreateUpdatePage';
import CategoryListPage from './pages/Category/CategoryListPage';
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Page404 from './pages/NotFound/Page404';
import ProductCreateUpdatePage from './pages/Product/ProductCreateUpdatePage';
import ProductListPage from './pages/Product/ProductListPage';
import BrandListPage from "./pages/Brand/BrandListPage";
import BrandCreateUpdatePage from "./pages/Brand/BrandCreateUpdatePage";

function App() {
  return (
    <Fragment>
    <BrowserRouter>
        <Routes>
            <Route exact path="/product/list" element={<ProductListPage/>}/>
            <Route exact path="/product/add" element={<ProductCreateUpdatePage/>}/>
            <Route exact path="/category/list" element={<CategoryListPage/>}/>
            <Route exact path="/category/add" element={<CategoryCreateUpdatePage/>}/>
            <Route exact path="/brand/list" element={<BrandListPage/>}/>
            <Route exact path="/brand/add" element={<BrandCreateUpdatePage/>}/>


            <Route exact path="/" element={<DashboardPage/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    </BrowserRouter>
</Fragment>
  );
}

export default App;
