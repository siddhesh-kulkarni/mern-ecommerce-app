import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/page";
import ProductPage from "./Pages/ProductPage/page";
import Login from "./Pages/Login/page";
import Register from "./Pages/Register/page";
import Cart from "./Pages/Cart/page";
import { useTranslation } from "react-i18next";
import PageLoader from "./Components/PageLoader/page";
import AdminLogin from "./Pages/Admin/AdminLogin/page";
import Dashboard from "./Pages/Admin/Dashboard/page";
import Products from "./Pages/Admin/Products/page";
import Orders from "./Pages/Admin/Orders/page";
import Coupons from "./Pages/Admin/Coupons/page";
import Customers from "./Pages/Admin/Customers/page";
import Categories from "./Pages/Admin/Categories/page";
import Discounts from "./Pages/Admin/Discounts/page";
import Banners from "./Pages/Admin/Banners/page";
import Logo from "./Pages/Admin/Logo/page";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 500);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 800);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <BrowserRouter>
        <Routes>
          <Route path={'/admin/login'} element={<AdminLogin />} />
          <Route path={'/admin/dashboard'} element={<Dashboard />} />
          <Route path={'/admin/products'} element={<Products />} />
          <Route path={'/admin/categories'} element={<Categories />} />
          <Route path={'/admin/discounts'} element={<Discounts />} />
          <Route path={'/admin/orders'} element={<Orders />} />
          <Route path={'/admin/coupons'} element={<Coupons />} />
          <Route path={'/admin/customers'} element={<Customers />} />
          <Route path={'/admin/banners'} element={<Banners />} />
          <Route path={'/admin/logo'} element={<Logo />} />

          <Route path="*" element={
            <>
              <Header onOpenCart={() => setCartOpen(true)} />
              <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
              <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/product'} element={<ProductPage />} />
                <Route path={'/product/:slug'} element={<ProductPage />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/register'} element={<Register />} />
              </Routes>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;