import { t } from "i18next"
import FilterBar from "../../Components/FilterBar/FilterBar"
import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import SharesOutstandingsTable from "../../Components/SharesOutstandingsTable/SharesOutstandingsTable";
import ReactPaginate from 'react-paginate';
import Pagination  from "../../Components/Pagination/Pagination";

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
        setData(DatejsonData?.data)
    }, [])
    const [paginationData, setPagenationData]= useState([])
    useEffect(() => {
        setPagenationData(data)
    }, [data])

        
    const [currentItems, setCurrentItems] = useState(null);
    const handleCurrentItems = (data) => {
        setCurrentItems(data)
    }


    return (
        <div className="container">
            <h4>{t("Negotiated Deals - Abdelmohsen AlHokair Group for Tourism and Development")}</h4>
            <FilterBar setData={(filterd) => setData(filterd)} data={data} />
            <div className="container table-responsive ">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>value</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((obj, i) => <SharesOutstandingsTable key={i} obj={obj} />)}
                    </tbody>
                </table>
                {/* <Pagination items={paginationData} currentItems={currentItems} setCurrentItems={handleCurrentItems} /> */}
            </div>
        </div>
    )
}

export default NegotiatedDealsPage