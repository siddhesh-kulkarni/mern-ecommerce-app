import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/page";
import { useTranslation } from "react-i18next";
import PageLoader from "./Components/PageLoader/page"; 

function App() {
  const [isLoading, setIsLoading] = useState(true);
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
        <Header />
        <Routes>
          <Route path={'/'} exact={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;