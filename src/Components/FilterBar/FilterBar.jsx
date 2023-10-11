import i18next, { t } from "i18next";
import "./filterbar.scss";
import { useState } from "react";
import { CustomProvider, DateRangePicker } from "rsuite";
import arEG from 'rsuite/locales/ar_EG';
import enUS from 'rsuite/locales/en_US';

function FilterBar({ data, setCurrentItems }) {
    const { language } = i18next
    const [dateRange, setDateRange] = useState([new Date('01-01-2022'), new Date()]);
    const [filterObj, setFilterObj] = useState({ name: '', value: '', startDate: new Date('01-01-2022'), endDate: new Date() })

    const handleDateChange = (value) => {
        setDateRange(value);
        if (value?.[0] && value?.[1]) {
            // extracting the start and end from the range 
            setFilterObj({
                ...filterObj,
                startDate: new Date(value[0]?.toISOString().split('T')[0]),
                endDate: new Date(value[1].toISOString().split('T')[0])
            })
        } else {
            // reset the data into the default 
            setFilterObj({
                ...filterObj,
                startDate: new Date('01-01-2022'),
                endDate: new Date()
            })

        }
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
            let filteredData = data;
            // filter data according to the avaliable filter
            if (startDate && endDate) { filteredData = filterByDateRange(filteredData, startDate, endDate); }
            if (name) { filteredData = filterByName(filteredData, name); }
            if (value) { filteredData = filterByValue(filteredData, value); }

            return filteredData;
        };
        // sending the data after filtering to be applied into UI
        setCurrentItems(filterData())
    };

    // filteration Functions
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
        <div className="filterBar border my-3 p-3 rounded-4 bg-light">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 my-2">
                    <label className="col-lg-2 w-75 mb-2 mx-1" htmlFor="date"> {t("Date")}: </label>
                    <div className='mx-2'>
                        <CustomProvider locale={i18next?.language === "ar" ? arEG : enUS}>
                            <DateRangePicker
                                placeholder={t("Pick a range")}
                                value={dateRange}
                                onChange={handleDateChange}
                                cleanable={true}
                                className="w-100 "
                                placement={language === "ar" ? "bottomEnd" : "bottomStart"}
                            />
                        </CustomProvider>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 my-2 d-flex flex-column">
                    <label className="col-lg-2 mb-2" htmlFor="name">{t('Name')}:</label>
                    <input name="name" value={filterObj?.name} onChange={(e) => hanldeChange(e)} className="rounded p-2 bg-white border text-primary flex-grow-1 mx-2" placeholder={t("search by name")} id='name' type="text" />
                </div>

                <div className="col-lg-4 col-md-6 col-12 my-2 d-flex flex-column">
                    <label className="col-lg-2 mb-2" htmlFor="value">{t('Value')}:</label>
                    <input name="value" value={filterObj?.value} onChange={(e) => hanldeChange(e)} className="rounded p-2 bg-white border text-primary flex-grow-1 mx-2" placeholder={t("search by value")} id='value' type="number" />
                </div>

            </div>
            <div className="container d-flex flex-wrap justify-content-lg-between justify-content-md-between justify-content-center ">
                <button className="col-lg-2 col-md-5 col-12 my-2 btn btn-outline-dark " onClick={handleFilteration}>
                    {t("Search")}
                </button>
                <div className="col-lg-2 col-md-6 d-flex justify-content-end">
                    <h2 className="bi bi-file-pdf"></h2>
                    <h2 className="bi bi-file-earmark-text"></h2>
                    <h2 className="bi bi-printer"></h2>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;
