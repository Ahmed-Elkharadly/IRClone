import './financialratiospage.scss'
import { t } from 'i18next'
import { useEffect, useState } from 'react'
import CurrencyBtn from '../../Components/CurrencyBtn/CurrencyBtn'
import PeriodBtn from '../../Components/PeriodBtn/PeriodBtn'
import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import Accordion from '../../Components/Accordion/Accordion'
import ToggleBtn from '../../Components/ToggleBtn/ToggleBtn'

function FinancialRatiosPage() {
    const queryClient = useQueryClient();

    const [currency, setCurrency] = useState('');
    const [period, setPeriod] = useState('annual');

    const AnnualAPI = async () => {
        const response = await axios.get('annual.json');
        return response?.data?.financialRatioFieldsGroups;
    };
    const QuarterAPI = async () => {
        const response = await axios.get('quarter.json');
        return response?.data?.financialRatioFieldsGroups;
    };


    const annualData = useQuery('annual', AnnualAPI);
    const quarterData = useQuery('quarter', QuarterAPI);

    let { data } = period === "annual" ? annualData : quarterData

    useEffect(() => {
        queryClient.invalidateQueries(['annual', 'quarter']);
        data = (period === "annual" ? annualData?.data : quarterData?.data)
    }, [period])

    const handlePeriod = (e) => {
        const { value } = e.target
        if (period === value) return
        else setPeriod(value);
    }

    const handleCurrency = (e) => {
        const { value } = e.target
        if (currency === value) return
        else setCurrency(value)
    }

    // const currencies = [{ value: 'sar', default: true }, { value: 'usd' }]
    // const periods = [{ value: 'annual', default: true }, { value: 'quarter' }]
    // useEffect(() => {
    //     delete currencies?.[0]?.default
    // }, [currency])

    // useEffect(() => {
    //     delete periods?.[0]?.default
    // }, [period])

    return (

        <div className='container'>

            <h4 className='mb-3'>
                {t('Details')}
            </h4>
            <div className='d-flex justify-content-between flex-wrap container'>
                {/* tooglebtn atry to make reusable component to swich between various options */}
                {/* <ToggleBtn data={periods} ActionFn={handlePeriod} swichValue={period} /> */}
                {/* <ToggleBtn data={currencies} ActionFn={handleCurrency} swichValue={currency} /> */}

                <PeriodBtn period={period} handlePeriod={handlePeriod} />

                <CurrencyBtn currency={currency} handleCurrency={handleCurrency} />

            </div>
            <div>

            </div>
            <Accordion data={data} currency={currency} />
        </div>



    )
}

export default FinancialRatiosPage