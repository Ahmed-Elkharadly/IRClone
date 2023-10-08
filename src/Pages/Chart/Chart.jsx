import Highcharts from 'highcharts/highstock';

// import 'highcharts/indicators/indicators';
// import 'highcharts/indicators/pivot-points';
// import 'highcharts/indicators/macd';
// import 'highcharts/modules/exporting';
// import 'highcharts/modules/map';

import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

const Chart = () => {
    const [data, setData] = useState()
    const [chartType, setChartType] = useState()

    useEffect(() => {
        fetch('https://demo-live-data.highcharts.com/aapl-ohlc.json')
            .then(response => response.json())
            .then(data => { setData(data) })
    }, [chartType])

    const options =
    {
        chart: {
            height: 400
        },
        rangeSelector: {
            selected: 100
        },
        series: [{
            name: 'AAPL Stock Price',
            data: data,
            type: chartType ?? 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        height: 300
                    },
                    subtitle: {
                        text: null
                    },
                    navigator: {
                        enabled: false
                    }
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

export default Chart;
