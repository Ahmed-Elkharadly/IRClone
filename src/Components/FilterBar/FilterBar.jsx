import { t } from "i18next";
import "./filterbar.scss";
import { useState } from "react";
import { DateRangePicker } from "rsuite";

function FilterBar({ data, setData }) {
    const [dateRange, setDateRange] = useState([]);
    const [filterObj, setFilterObj] = useState({
        startDate: '',
        endDate: '',
        name: '',
        value: ''
    })

    const handleDateChange = (value) => {
        setDateRange(value);
        setFilterObj({
            ...filterObj,
            startDate: new Date(value[0]?.toISOString().split('T')[0]),
            endDate: new Date(value[1].toISOString().split('T')[0])
        })
    };
    const hanldeChange = (e) => {
        const { value, name } = e.target
        setFilterObj({
            ...filterObj,
            [name]: value
        })
    }
    const handleFilteration = () => {
        const filterData = () => {
            let { name, value, startDate, endDate } = filterObj
            console.log(name, value, startDate, endDate)
            let filteredData = data;

            if (startDate && endDate) { filteredData = filterByDateRange(filteredData, startDate, endDate); }
            if (name) { filteredData = filterByName(filteredData, name); }
            if (value) { filteredData = filterByValue(filteredData, value); }
            return filteredData;
        };
        setData(filterData());
    };

    const filterByDateRange = (filteredData, startDate, endDate) => {
        return filteredData?.filter(obj => new Date(obj?.date) >= startDate && new Date(obj?.date) <= endDate);
    }
    const filterByName = (filteredData, name) => {
        return filteredData?.filter(obj => obj?.name.includes(name));
    }
    const filterByValue = (filteredData, value) => {
        return filteredData?.filter(obj => Number(obj?.value) === Number(value));
    }

    return (
        <div className=" border p-3 filterBar">
            <div className="row p-0 d-flex flex-wrap align-items-center justify-content-between">
                <div className="col-lg-4 col-12 my-2 d-flex flex-wrap">
                    <label className="col-lg-2 " htmlFor="date"> {t("Date")}:</label>
                    <DateRangePicker value={dateRange} onChange={handleDateChange} cleanable={false} className="flex-grow-1 mx-2" />
                </div>

                <div className="col-lg-4 col-12 my-2 d-flex flex-wrap">
                    <label className="col-lg-2 " htmlFor="name">{t('Name')}:</label>
                    <input name="name" value={filterObj?.name} onChange={(e) => hanldeChange(e)} className="rounded p-2 bg-light border-0 text-primary flex-grow-1 mx-2" placeholder="search by name" id='name' type="text" />
                </div>

                <div className="col-lg-4 col-12 my-2 d-flex flex-wrap">
                    <label className="col-lg-2 " htmlFor="value">{t('value')}:</label>
                    <input name="value" value={filterObj?.value} onChange={(e) => hanldeChange(e)} className="rounded p-2 bg-light border-0 text-primary flex-grow-1 mx-2" placeholder="search by value" id='value' type="number" />
                </div>

            </div>
            <div className="d-flex flex-wrap justify-content-lg-between justify-content-center ">
                <button
                    className="col-lg-2 col-12 my-2 btn btn-outline-light "
                    onClick={handleFilteration}
                >
                    {t("search")}
                </button>
                <div className="col-lg-2 d-flex justify-content-end">
                    <h2 className="bi bi-file-pdf-fill"></h2>
                    <h2 className="bi bi-file-earmark-text-fill"></h2>
                    <h2 className="bi bi-printer-fill"></h2>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;
