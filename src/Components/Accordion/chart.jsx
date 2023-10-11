/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsReact from "highcharts-react-official";
import i18next from "i18next";

HighchartsAccessibility(Highcharts);

const ChartModal = ({ data, isOpen }) => {
  const desiredYears = ["2019", "2020", "2021", "2022"];
  const [chartOptions, setChartOptions] = useState({});
  const { language } = i18next
  
  useEffect(() => {
    if (isOpen) {
      const myValues = data?.values?.map((val) => Number(parseFloat(val.value).toFixed(2)));
      setChartOptions({
        chart: { alignTicks: false, type: 'column' },
        title: {
          text: language === 'ar' ? data?.nameAr : data?.nameEn,
          align: "center",
        },
        xAxis: { categories: desiredYears, },
        series: [{
          name: data?.nameEn,
          data: myValues,
        }],
      });
    }
  }, [data, isOpen]);

  return (isOpen && (<HighchartsReact highcharts={Highcharts} options={chartOptions} />))
};

export default ChartModal;
