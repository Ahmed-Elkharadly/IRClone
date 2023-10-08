import { t } from "i18next";
import "./filterbar.scss";
import { useState } from "react";
import { DateRangePicker } from "rsuite";

function FilterBar({ data, setData }) {
    const [dateRange, setDateRange] = useState([]);
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const handleDateChange = (value) => {
        setDateRange(value);
        setStartDate(new Date(value[0]?.toISOString().split('T')[0]))
        setEndDate(new Date(value[1].toISOString().split('T')[0]))
    };
    const handleFilteration = () => {

        let filteredData = data?.filter(obj => new Date(obj?.date) >= startDate && new Date(obj?.date) <= endDate)
        setData(filteredData)
        console.log(filteredData)
    }

    return (
        <div className="row border p-3 filterBar">
            <div className="col-lg-7 p-0 d-flex flex-wrap align-items-center justify-content-lg-between">
                <label className="col-lg-2 fs-5" htmlFor="date">
                    {t("Date")}:
                </label>
                <div className="col-lg-6 col-12 m-lg-0 m-2">
                    <DateRangePicker
                        value={dateRange}
                        onChange={handleDateChange}
                        cleanable={false}
                        className=" w-100"
                    />
                </div>
                <button
                    onClick={handleFilteration}
                    className="btn btn-outline-light col-lg-3 col-12 mx-2"
                >
                    {t("search")}
                </button>
            </div>
            <div className="col-lg-5 col-12 d-flex justify-content-end">
                <h1 className="bi bi-file-pdf-fill"></h1>
                <h1 className="bi bi-file-earmark-text-fill"></h1>
                <h1 className="bi bi-printer-fill"></h1>
            </div>
        </div>
    );
}

export default FilterBar;
