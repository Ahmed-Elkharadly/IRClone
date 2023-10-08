import Table from '../../Components/TablesCharts/Table'
import './financialratiospage.scss'
import jsonData from '../../Utilities/data'
import { t } from 'i18next'
function FinancialRatiosPage() {

    return (
        <div className='container'>
            <div className=''>
                <h4 className=''>
                    {t('Details')}
                </h4>
                <div className=''>
                    <Table data={jsonData?.financialRatioFieldsGroups} />
                </div>
            </div>
        </div>
    )
}

export default FinancialRatiosPage