import './Styles/main.scss'
import HeroSection from "./Layout/HeroSection/HeroSection";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Aside from "./Layout/Aside/Aside";
import Footer from "./Layout/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Overview from "./Pages/Overview/overview";
import Profile from "./Pages/Profile/Profile";
import CompanyOverview from "./Pages/Overview/CompanyOverview/CompanyOverview";
import MarketData from "./Pages/Overview/MarketData/MarketData";
import FinancialRatiosSection from "./Pages/Overview/FinantialRatios/FinancialRatios";
import CorporateActions from "./Pages/Overview/CorporateActions/CorporateActions";
import Chart from "./Pages/Chart/Chart";
import FinancialRatiosPage from "./Pages/FinancialRatios/FinancialRatiosPage";
import NegotiatedDealsPage from './Pages/NegotiatedDealsPage/NegotiatedDealsPage';
function App() {
  const { i18n } = useTranslation();
  const [languageClass, setLanguageClass] = useState('');

  useEffect(() => {
    const updateLanguageClass = () => {
      const newLanguageClass = i18n.language === 'ar' ? 'ArContainer' : 'EnContainer';
      setLanguageClass(newLanguageClass);
    };
    updateLanguageClass();
    i18n.on('languageChanged', updateLanguageClass);
    return () => {
      i18n.off('languageChanged', updateLanguageClass);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <div className={languageClass}>
      < HeroSection />
      <Aside>
        <Routes>

          <Route path='overview' element={<Overview />}>
            <Route path="" element={<CompanyOverview />} />
            <Route path='market-data' element={<MarketData />} />
            <Route path='financial-ratios' element={<FinancialRatiosSection />} />
            <Route path='corporate-actions' element={<CorporateActions />} />
          </Route>

          <Route path='profile' element={<Profile />} />
          <Route path='chart' element={<Chart />} />
          <Route path='financialRatios' element={<FinancialRatiosPage />} />
          <Route path='negotiatedDeals' element={<NegotiatedDealsPage />} />
        </Routes>
      </Aside>
      <Footer />
    </div >
  );
}

export default App;
