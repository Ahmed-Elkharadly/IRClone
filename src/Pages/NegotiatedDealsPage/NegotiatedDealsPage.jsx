import { t } from "i18next"
import FilterBar from "../../Components/FilterBar/FilterBar"
import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';

function NegotiatedDealsPage() {

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
    
    const [data, setData] = useState([])
    useEffect(() => {
        setData(DatejsonData.data);
    }, [])

    return (
        <div className="container">
            <h4>{t("Negotiated Deals - Abdelmohsen AlHokair Group for Tourism and Development")}</h4>
            <FilterBar setData={(filterd) => setData(filterd)} data={data} />
            <div>
                {data?.map((obj, i) => {
                    return (
                        <div key={i}>
                            <div className="d-flex justify-content-between align-items-center p-4">
                                <h5>{obj.name}</h5>  <h6>{obj.date}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NegotiatedDealsPage