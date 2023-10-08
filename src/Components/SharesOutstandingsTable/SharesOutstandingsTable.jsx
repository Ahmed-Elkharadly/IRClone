import i18next from "i18next"

function SharesOutstandingsTable({ data }) {
  console.log(data)
  const { language } = i18next
  return (
    <table className="table table-striped " >
      <thead className="table-primary border">
        <tr>
          {/* <th className="datails">
            {language === 'ar' ? data?.nameAr : data?.nameEn}
          </th>

          {data?.values?.map((group, i) => <th key={i}>{group?.year}</th>)} */}

        </tr>

      </thead>

      <tbody >



      </tbody>
    </table>
  )
}

export default SharesOutstandingsTable