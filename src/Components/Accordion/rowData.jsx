import React, { useEffect, useState } from "react";
import chartIc from "../../assets/icons/chartIc.svg";
import i18next from "i18next";

const RowData = ({ data, openChartModal, currency, desiredYears }) => {
  const { language } = i18next
  const [vals, setVals] = useState('')
  // Converting the curency
  useEffect(() => {
    let newValues = data.values?.map((obj) => {
      if (data?.ratioName === "SharesOutstandings1") {
        return obj
      } 
      
      if (currency === '') {
        return
      } else if (currency === 'usd') {
        obj.value = obj.value / 3.75
        return obj
      } else if (currency === 'sar') {
        obj.value = obj.value * 3.75
        return obj
      } else return
    })
    setVals({ ...data, values: newValues })
  }, [currency])

  // extract the values from the objects and update during data changing
  useEffect(() => {
    data.values = data?.values?.filter(value => desiredYears.includes(value.year))
    setVals(data)
  }, [data])

  return (
    <>
      <td className="p-2 ps-4" style={{ width: "35%" }}> {language === 'ar' ? vals?.nameAr : vals?.nameEn} </td>
      {vals && vals?.values?.map((val, index) => (<td style={{ width: "16%" }} className="p-2" key={index}>{parseFloat(val?.value).toFixed(2)}</td>))}
      <td style={{ cursor: "pointer", width: "16%" }} className="p-2" onClick={() => openChartModal(vals)} >
        <img className="px-2" src={chartIc} alt="" />
      </td>
    </>
  );
};
export default RowData;
