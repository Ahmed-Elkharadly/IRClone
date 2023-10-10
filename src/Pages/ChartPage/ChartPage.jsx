import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from 'react-query';
import axios from 'axios';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

const ChartPage = () => {
    const [chartType, setChartType] = useState()

    const getChartData = async () => {
        const res = await axios.get('https://demo-live-data.highcharts.com/aapl-ohlc.json')
        return res.data
    }
    const chartData = useQuery(['chartPage'], getChartData)
    let { data } = chartData

    useEffect(() => { data = chartData?.data }, [chartType])

    const options =
    {
        chart: { height: 400 },
        rangeSelector: { selected: 100 },
        series: [{
            name: 'DATA',
            data: data,
            type: chartType ?? 'area',
            threshold: null,
            tooltip: { valueDecimals: 2 }
        }],
        responsive: {
            rules: [{
                condition: { maxWidth: 500 },
                chartOptions: {
                    chart: { height: 300 },
                    subtitle: { text: null },
                    navigator: { enabled: false }
                }
            }]
        }
    }

    return (
        <div>
            <div className="py-4">
                <select className='btn border text-center' onChange={(e) => { setChartType(e.target.value) }}>
                    <option value="area">Area</option>
                    <option value="line">Line</option>
                    <option value="ohlc">OHLC</option>
                    <option value="spline">Spline</option>
                    <option value="areaspline">Area Spline</option>
                </select>
            </div>
            <HighchartsReact constructorType='stockChart' highcharts={Highcharts} options={options} chartType />
        </div>
    );
};

export default ChartPage;
