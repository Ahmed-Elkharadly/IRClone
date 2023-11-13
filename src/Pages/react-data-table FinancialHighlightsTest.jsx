import React, { useState } from "react";
// Currency Btns
import CurrencyBtn from "../../../components/CurrencyBtn/CurrencyBtn";
// TRanslation
import i18n from "i18next";
import { useTranslation } from "react-i18next";
// Data Table
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
// Get Data
import useRequest from "../../../hooks/useRequest";
import useAPIs from "../../../hooks/useAPIs";
// Loader
import Loader from "../../../components/Loader/Loader";
// add Formats & styles to Numbers
import { styledValues } from "../../../utilities/customFn";

function FinancialHighlights() {
  const { t } = useTranslation();
  // Currency
  const [currency, setCurrency] = useState("");
  const handleCurrency = (e) => {
    const { value } = e.target;
    if (currency === value) return;
    else setCurrency(value);
  };
  //   getting Data
  const APIs = useAPIs();
  const { data, isLoading } = useRequest(APIs.profile.key, APIs.profile.link);

  //   Customize my Columns and Headers
  const columns = [
    {
      accessorKey: i18n?.language === "ar" ? "DisplayNameAr" : "DisplayNameEn",
      header: t("profile.financialHighlights.description"),
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      header: t("profile.financialHighlights.chart"),
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "2022",
      header: "2022",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "2021",
      header: "2021",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "2020",
      header: "2020",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "2019",
      header: "2019",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "2018",
      header: "2018",
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];
  // use React Data Table
  const table = useReactTable({
    data: data?.financialHighlights,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <Loader />;
  return (
    <div className="continer corporate-actions my-1 mx-0 px-0">
      <h3 className="mx-2 arM">
        {t("sidebar.financialHighlights")} ({t("global.million")}{" "}
        {t(`global.${currency}`)}){" "}
      </h3>
      <hr />
      <div className="container-lg my-3 ">
        <CurrencyBtn handleCurrency={handleCurrency} currency={currency} />
        <div className="container table-responsive">
          <table className="table">
            <thead>
              {table.getHeaderGroups()?.map((headerGroup) => (
                <tr key={headerGroup?.id}>
                  {headerGroup?.headers?.map((header) => (
                    <th key={header?.id}>
                      {header?.column?.columnDef?.header}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table?.getRowModel()?.rows?.map((row) => (
                <tr key={row?.id}>
                  {row?.getVisibleCells()?.map((cell) => {
                    if (row?.original?.FSFieldName === "IS Net Income") {
                      return (
                        <td
                          key={cell.id}
                          className={
                            !isNaN(cell?.getValue())
                              ? styledValues(cell?.getValue()).className
                              : ""
                          }
                        >
                          {!isNaN(cell?.getValue()) &&
                          (currency === "" || currency === "sar")
                            ? Number(
                                styledValues(cell?.getValue()).formattedValue
                              )
                            : !isNaN(cell?.getValue()) && currency === "usd"
                            ? styledValues(cell?.getValue()).formattedValue /
                              3.75
                            : styledValues(cell?.getValue()).formattedValue}
                        </td>
                      );
                    } else {
                      return (
                        <td key={cell.id}>
                          {!isNaN(cell?.getValue()) &&
                          (currency === "" || currency === "sar")
                            ? cell?.getValue().toFixed(2)
                            : !isNaN(cell?.getValue()) && currency === "usd"
                            ? (cell?.getValue() / 3.75).toFixed(2)
                            : cell?.getValue()}
                        </td>
                      );
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FinancialHighlights;
