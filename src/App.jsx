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
// import { ProductDetails } from "./Pages/ProductDetails/page";

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
        <Header onOpenCart={() => setCartOpen(true)} />
        <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        <Routes>
          <Route path={'/'} exact={true} element={<Home />} />
          <Route path={'/product'} exact={true} element={<ProductPage />} />
          <Route path={'/product/:slug'} exact={true} element={<ProductPage />} />
          <Route path={'/login'} exact={true} element={<Login />} />
          <Route path={'/register'} exact={true} element={<Register />} />
          {/* Cart is opened via header toggle; removed route-based cart rendering */}
          {/* <Route path={'/productDetails/:id'} exact={true} element={<ProductDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;