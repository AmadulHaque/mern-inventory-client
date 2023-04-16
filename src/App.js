import React,{Fragment,useState} from 'react';
import { Navigate, Route, Routes} from "react-router-dom";
import {getToken} from "./helper/SessionHelper";
import CategoryCreateUpdatePage from './pages/Category/CategoryCreateUpdatePage';
import CategoryListPage from './pages/Category/CategoryListPage';
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Page404 from './pages/NotFound/Page404';
import ProductCreateUpdatePage from './pages/Product/ProductCreateUpdatePage';
import ProductListPage from './pages/Product/ProductListPage';
import BrandListPage from "./pages/Brand/BrandListPage";
import BrandCreateUpdatePage from "./pages/Brand/BrandCreateUpdatePage";
import ProfilePage from "./pages/Users/ProfilePage";


import LoginPage from "./pages/Users/LoginPage";
import RegistrationPage from "./pages/Users/RegistrationPage";
import SendOTPPage from "./pages/Users/SendOTPPage";
import VerifyOTPPage from "./pages/Users/VerifyOTPPage";
import CreatePasswordPage from "./pages/Users/CreatePasswordPage";
import FullscreenLoader from "./components/MasterLayout/FullscreenLoader";
import CustomerCreateUpdatePage from "./pages/Customer/CustomerCreateUpdatePage";
import CustomerListPage from "./pages/Customer/CustomerListPage";
import SupplierCreateUpdatePage from "./pages/Supplier/SupplierCreateUpdatePage";
import SupplierListPage from "./pages/Supplier/SupplierListPage";
import ExpenseTypeCreateUpdatePage from "./pages/ExpenseType/ExpenseTypeCreateUpdatePage";
import ExpenseTypeListPage from "./pages/ExpenseType/ExpenseTypeListPage";
import ExpenseCreateUpdatePage from "./pages/Expense/ExpenseCreateUpdatePage";
import ExpenseListPage from "./pages/Expense/ExpenseListPage";
import SalesCreateUpdatePage from "./pages/Sales/SalesCreateUpdatePage";
import SalesListPage from "./pages/Sales/SalesListPage";
import PurchaseCreateUpdatePage from "./pages/Purchase/PurchaseCreateUpdatePage";
import PurchaseListPage from "./pages/Purchase/PurchaseListPage";

function App() {
  
  if(getToken()){
  return (
    <>
      <Routes>
          <Route exact path="/CustomerCreateUpdatePage" element={<CustomerCreateUpdatePage/>}/>
          <Route exact path="/CustomerListPage" element={<CustomerListPage/>}/>

          <Route exact path="/ExpenseTypeCreateUpdatePage" element={<ExpenseTypeCreateUpdatePage/>}/>
          <Route exact path="/ExpenseTypeListPage" element={<ExpenseTypeListPage/>}/>
          <Route exact path="/ExpenseCreateUpdatePage" element={<ExpenseCreateUpdatePage/>}/>
          <Route exact path="/ExpenseListPage" element={<ExpenseListPage/>}/>

          <Route exact path="/PurchaseCreateUpdatePage" element={<PurchaseCreateUpdatePage/>}/>
          <Route exact path="/PurchaseListPage" element={<PurchaseListPage/>}/>

          <Route exact path="/SupplierCreateUpdatePage" element={<SupplierCreateUpdatePage/>}/>
          <Route exact path="/SupplierListPage" element={<SupplierListPage/>}/>

          <Route exact path="/SalesCreateUpdatePage" element={<SalesCreateUpdatePage/>}/>
          <Route exact path="/SalesListPage" element={<SalesListPage/>}/>

          <Route exact path="/product/list" element={<ProductListPage/>}/>
          <Route exact path="/product/add" element={<ProductCreateUpdatePage/>}/>
          <Route exact path="/category/list" element={<CategoryListPage/>}/>
          <Route exact path="/category/add" element={<CategoryCreateUpdatePage/>}/>
          <Route exact path="/brand/list" element={<BrandListPage/>}/>
          <Route exact path="/brand/add" element={<BrandCreateUpdatePage/>}/>
          <Route exact path="/" element={<DashboardPage/>}/>
          <Route exact path="/Profile" element={<ProfilePage/>}/>
          <Route path="*" element={<Page404/>}/>
          <Route path="/Login" element={<Navigate to="/" replace />}/>
          <Route path="/Registration" element={<Navigate to="/" replace />}/>
      </Routes>
        <FullscreenLoader/>
    </>
  );
  }else{
    return (
      <Fragment>

              <Routes>
                <Route path="/" element={<Navigate to="/Login" replace />}/>
                  <Route exact path="/Login" element={<LoginPage/>}/>
                  <Route exact path="/Registration" element={<RegistrationPage/>}/>
                  <Route exact path="/SendOTP" element={<SendOTPPage/>}/>
                  <Route exact path="/VerifyOTP" element={<VerifyOTPPage/>}/>
                  <Route exact path="/CreatePassword" element={<CreatePasswordPage/>}/>
                  <Route path="*" element={<Page404/>}/>
              </Routes>
      </Fragment>
    );
  }
}

export default App;
