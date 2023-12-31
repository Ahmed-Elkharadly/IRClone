/* eslint-disable react/prop-types */
import { useState } from "react";
import i18next from "i18next";
import ChartModal from "./chart";
import RowData from "./rowData";
import chartIc from "../../assets/icons/chartIc.svg";

function Accordion({ data, currency }) {

    const { language } = i18next
    const [chartData, setChartData] = useState();
    const [isChartModalOpen, setIsChartModalOpen] = useState(false);
    const desiredYears = ["2019", "2020", "2021", "2022"];

    const closeChartModal = () => setIsChartModalOpen(false);
    const openChartModal = (data) => {
        setChartData(data);
        setIsChartModalOpen(true);
    };

    return (
        <div className="accordion accordion-flush global-accordion table-responsive" id="accordionFlushExample">
            <table className="table">
                <thead className="table-primary">
                    <tr>
                        <th className="datails px-3" style={{ width: '35%' }}> Details </th>
                        {desiredYears?.map((year) => (<th key={year} className="px-3" style={{ width: '16%' }} > {year} </th>))}
                        <th><img className="px-3" src={chartIc} alt="" /></th>
                    </tr>
                </thead>
                {data?.map((item, z) => {
                    return (
                        <tbody className={'accordion '} id="accordionExample" key={z}>
                            {/* Accordion Btns */}
                            <tr className={`accordion-item`}>
                                <td colSpan={6}>
                                    <button className={`accordion-button ${z === 0 ? 'show' : 'collapsed'} fw-bolder`} type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne" + z} aria-expanded="false" aria-controls={"collapseOne" + z}>
                                        {language === 'ar' ? item?.fieldGroupAr : item?.fieldGroupEn}
                                    </button>
                                </td>
                            </tr>
                            {/* Nested Rows */}
                            {item?.financialRatioFieldsGroupFields?.map((Fields, i) => (
                                <tr key={i} id={"collapseOne" + z} className={z === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionFlushExample">
                                    <RowData data={Fields} openChartModal={openChartModal} currency={currency} desiredYears={desiredYears} />
                                </tr>
                            ))}
                        </tbody>
                    )
                })}
            </table>
            {/* Charts */}
            {isChartModalOpen && (
                <div className="chartmodals" onClick={closeChartModal}>
                    <ChartModal data={chartData} isOpen={isChartModalOpen} currency={currency} />
                </div>)
            }
        </div>
    )
}

export default Accordion