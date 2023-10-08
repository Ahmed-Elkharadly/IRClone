/* eslint-disable react/prop-types */
import { useState } from "react";
import Details from "./Details";
import chartIc from "../../assets/icons/chartIc.svg";

import ChartModal from "./chart";
import { t } from "i18next";

const Table = ({ data }) => {

  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [chartData, setChartData] = useState();
  const desiredYears = ["2019", "2020", "2021", "2022"];

  const closeChartModal = () => setIsChartModalOpen(false);
  const openChartModal = (data) => {
    setChartData(data);
    setIsChartModalOpen(true);
  };

  return (
    <>
      <div className="container table-responsive">
        <table className="table table-condensed table-striped ">
          <thead className="table-primary border">
            <tr>
              <th className="datails"> {t('Details')} </th>
              {desiredYears?.map((year, i) => (<th key={i}> {year} </th>))}
              <th> <img src={chartIc} alt="" /></th>
            </tr>
          </thead>

          <tbody className="accordion" id="accordionExample">
            {data?.map((item, index) => (
              <Details key={index} data={item} openChartModal={openChartModal} />
            ))}
          </tbody>

        </table>

      </div>

      {isChartModalOpen && (
        <div className="modals" onClick={closeChartModal}>
          <ChartModal data={chartData} isOpen={isChartModalOpen} />
        </div>)
      }
    </>
  );
};

export default Table;
