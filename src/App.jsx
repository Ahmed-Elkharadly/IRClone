import "./Styles/main.scss";
import HeroSection from "./Layout/HeroSection/HeroSection";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Aside from "./Layout/Aside/Aside";
import Footer from "./Layout/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import OverviewPage from "./Pages/OverviewPage/OverviewPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import CompanyOverview from "./Pages/OverviewPage/CompanyOverview/CompanyOverview";
import MarketData from "./Pages/OverviewPage/MarketData/MarketData";
import FinancialRatiosSection from "./Pages/OverviewPage/FinantialRatios/FinancialRatios";
import CorporateActions from "./Pages/OverviewPage/CorporateActions/CorporateActions";
import ChartPage from "./Pages/ChartPage/ChartPage";
import FinancialRatiosPage from "./Pages/FinancialRatiosPage/FinancialRatiosPage";
import NegotiatedDealsPage from "./Pages/NegotiatedDealsPage/NegotiatedDealsPage";
import { ContactUs } from "./Pages/Contact/Contact";

function App() {
  const { i18n } = useTranslation();
  const [languageClass, setLanguageClass] = useState("");

  useEffect(() => {
    window?.addEventListener("message", (event) => {
      if (event.data.type === "requestHeight") {
        // Respond with the content height
        const contentHeight = document.body.scrollHeight;
        window?.parent?.postMessage(
          { type: "contentHeight", height: contentHeight },
          "http://127.0.0.1:5500"
        );
      }
    });
  }, [window?.location]);

  useEffect(() => {
    const updateLanguageClass = () => {
      setLanguageClass(i18n.language === "ar" ? "ArContainer" : "EnContainer");
    };
    updateLanguageClass();
    i18n.on("languageChanged", updateLanguageClass);
    return () => {
      i18n.off("languageChanged", updateLanguageClass);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <div className={`${languageClass}`}>
      <HeroSection />
      <Aside>
        <Routes>
          <Route path="overview" element={<OverviewPage />}>
            <Route path="" element={<CompanyOverview />} />
            <Route path="market-data" element={<MarketData />} />
            <Route
              path="financial-ratios"
              element={<FinancialRatiosSection />}
            />
            <Route path="corporate-actions" element={<CorporateActions />} />
          </Route>

          <Route path="profile" element={<ProfilePage />} />
          <Route path="chart" element={<ChartPage />} />
          <Route path="financialRatios" element={<FinancialRatiosPage />} />
          <Route path="negotiatedDeals" element={<NegotiatedDealsPage />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </Aside>
      <Footer />
    </div>
  );
}

export default App;
