import { t } from "i18next"
import FilterBar from "../../Components/FilterBar/FilterBar"
import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import Pagination from "../../Components/Pagination/Pagination";

// Creating Fake Data as fetching data from API
const mydata = [];
for (let i = 1; i <= 100; i++) {
    const item = {
        id: i,
        name: faker.person.fullName(),
        value: faker.number.int(),
        date: faker.date.past().toISOString().split("T")[0],
    };
    mydata.push(item);
}
const DatejsonData = { data: mydata }


function NegotiatedDealsPage() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(DatejsonData?.data)
    }, [])

    const [currentItems, setCurrentItems] = useState(null);
    const handleCurrentItems = (data) => setCurrentItems(data)



    return (
        <div className="contianer" >
            <h3 className="p-2">{t("Negotiated Deals - Abdelmohsen AlHokair Group for Tourism and Development")}</h3>
            <FilterBar setData={(filterd) => setData(filterd)} setCurrentItems={handleCurrentItems} data={data} />

            <div className="table-responsive">
                <table className="table  w-100">
                    <thead className="table-primary">
                        <tr>
                            <th className="fs-6">{t('Name')}</th>
                            <th className="fs-6">{t('Value')}</th>
                            <th className="fs-6">{t('Date')}</th>
                        </tr>
                    </thead>
                    <tbody >
                        {currentItems?.map((obj, i) =>
                            <tr key={i}>
                                <td> {obj.name} </td>
                                <td>  {obj.value} </td>
                                <td> {obj.date}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination items={data} setCurrentItems={handleCurrentItems} itemsCount={7} />
        </div>
    )
}

export default NegotiatedDealsPage