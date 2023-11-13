import React, { useState } from "react";
import "../profilePage.css";
// Currency Btns
import CurrencyBtn from "../../../components/CurrencyBtn/CurrencyBtn";
// TRanslation
import i18n from "i18next";
import { useTranslation } from "react-i18next";

// Get Data
import useRequest from "../../../hooks/useRequest";
import useAPIs from "../../../hooks/useAPIs";
// Loader
import Loader from "../../../components/Loader/Loader";
// add Formats & styles to Numbers
import { styledValues } from "../../../utilities/customFn";
import ChartModal from "../../../components/ChartModal/ChartModal";

function FinancialHighlights() {
  const { t } = useTranslation();
  // Currency state
  const [currency, setCurrency] = useState("");
  // getting Data
  const APIs = useAPIs();
  const { data, isLoading } = useRequest(APIs.profile.key, APIs.profile.link);
  const financialHighlights = data?.financialHighlights;
  // Chart states
  console.log(financialHighlights);
  const [isChartModalOpen, setIsChartModalOpen] = useState("");
  const [chartData, setChartData] = useState(false);
  // change Currancy
  const handleCurrency = (e) => {
    const { value } = e.target;
    if (currency === value) return;
    else setCurrency(value);
  };
  // show and pass data to chart
  function handleChart(data) {
    setChartData(data);
    setIsChartModalOpen(true);
  }
  const years = Object.keys(financialHighlights[0]).filter(
    (key) => parseInt(key) >= 2018
  );
  // loading condition
  if (isLoading) return <Loader />;
  return (
    <div className="continer corporate-actions my-1 mx-0 px-0">
      {/* Title */}
      <h3 className="mx-2 arM">
        {t("sidebar.financialHighlights")} ({t("global.million")}{" "}
        {t(`global.${currency}`)}){" "}
      </h3>
      <hr />
      <div className="container-lg my-3 ">
        {/* Currency Buttons */}
        <CurrencyBtn handleCurrency={handleCurrency} currency={currency} />
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>{t("profile.financialHighlights.description")}</th>
                <th>{t("profile.financialHighlights.chart")}</th>
                {years?.map((year) => (
                  <th key={year}>{year}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {financialHighlights?.map((heighlight) => {
                // handle  values changing according to Currency
                let values = { ...heighlight };
                values["2022"] =
                  currency === "usd"
                    ? heighlight?.["2022"] / 3.75
                    : heighlight?.["2022"];
                values["2021"] =
                  currency === "usd"
                    ? heighlight?.["2021"] / 3.75
                    : heighlight?.["2021"];
                values["2020"] =
                  currency === "usd"
                    ? heighlight?.["2020"] / 3.75
                    : heighlight?.["2020"];
                values["2019"] =
                  currency === "usd"
                    ? heighlight?.["2019"] / 3.75
                    : heighlight?.["2019"];
                values["2018"] =
                  currency === "usd"
                    ? heighlight?.["2018"] / 3.75
                    : heighlight?.["2018"];

                return (
                  <tr key={heighlight?.FSFieldName}>
                    <td style={{ minWidth: "225px" }}>
                      {i18n.language === "ar"
                        ? heighlight?.DisplayNameAr
                        : heighlight?.DisplayNameEn}
                    </td>
                    <td>
                      <i
                        style={{ cursor: "pointer", width: "10%" }}
                        onClick={() => {
                          handleChart(values);
                        }}
                        className="bi bi-bar-chart-line-fill chartIcon"
                      ></i>
                    </td>
                    <td
                      className={
                        heighlight?.FSFieldName === "IS Net Income"
                          ? styledValues(values?.["2022"]).className
                          : ""
                      }
                    >
                      {heighlight?.FSFieldName === "IS Net Income"
                        ? styledValues(values?.["2022"]).formattedValue
                        : values?.["2022"].toFixed(2)}
                    </td>
                    <td
                      className={
                        heighlight?.FSFieldName === "IS Net Income"
                          ? styledValues(values?.["2021"]).className
                          : ""
                      }
                    >
                      {heighlight?.FSFieldName === "IS Net Income"
                        ? styledValues(values?.["2021"]).formattedValue
                        : values?.["2021"].toFixed(2)}
                    </td>
                    <td
                      className={
                        heighlight?.FSFieldName === "IS Net Income"
                          ? styledValues(values?.["2020"]).className
                          : ""
                      }
                    >
                      {heighlight?.FSFieldName === "IS Net Income"
                        ? styledValues(values?.["2020"]).formattedValue
                        : values?.["2020"].toFixed(2)}
                    </td>
                    <td
                      className={
                        heighlight?.FSFieldName === "IS Net Income"
                          ? styledValues(values?.["2019"]).className
                          : ""
                      }
                    >
                      {heighlight?.FSFieldName === "IS Net Income"
                        ? styledValues(values?.["2019"]).formattedValue
                        : values?.["2019"].toFixed(2)}
                    </td>
                    <td
                      className={
                        heighlight?.FSFieldName === "IS Net Income"
                          ? styledValues(values?.["2018"]).className
                          : ""
                      }
                    >
                      {heighlight?.FSFieldName === "IS Net Income"
                        ? styledValues(values?.["2018"]).formattedValue
                        : values?.["2021"].toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {isChartModalOpen && (
        <div className="chartmodals" onClick={() => setIsChartModalOpen(false)}>
          <ChartModal
            data={chartData}
            isOpen={isChartModalOpen}
            currency={currency}
          />
        </div>
      )}
    </div>
  );
}

export default FinancialHighlights;
