import i18next, { t } from 'i18next'
import './marketdata.scss'

function MarketData() {
    return (
        <section className='market-data m-4'>
            <div className='row justify-content-between '>
                <div className='col-lg-3 col-md-3 col-6'>
                    <h6 className='text-underline'>{t('Market Value')}</h6>
                    <h5 className='text-success'>686.7 %</h5>
                </div>
                <div className='col-lg-2 col-md-3 col-5'>
                    <h6 className='text-underline'>3 {t('Months')}</h6>
                    <h5 className='text-danger'>13.2 %</h5>
                </div>
                <div className='col-lg-2 col-md-3 col-5'>
                    <h6 className='text-underline'>6 {t('Months')}</h6>
                    <h5 className='text-danger'>10.7 %</h5>
                </div>
                <div className='col-lg-2 col-md-3 col-5'>
                    <h6 className='text-underline'>12 {t('Months')}</h6>
                    <h5 className='text-danger'>2.07 %</h5>
                </div>
                <div className='col-lg-3 col-md-3 col-6'>
                    <h6 className='text-underline'>{t('Year To Date')}</h6>
                    <h5 className='text-success'>21.2291 %</h5>
                </div>
            </div>
            <hr />

            <div className='row  '>
                <div className={`col-lg-3 col-md-4 col-6  ${i18next?.language === 'ar' ? 'border-start' : 'border-end'}`}>
                    <h6 className='text-underline '>{t('Volume')}</h6>
                    <h5>10.7 %</h5>
                </div>
                <div className={`col-lg-4 col-md-4 col-6 text-lg-center ${i18next?.language === 'ar' ? 'border-start' : 'border-end'}`}>
                    <h6 className='text-underline'>{t('Turnover')}</h6>
                    <h5>2.07 %</h5>
                </div>
                <div className={`col-lg-4 col-md-4 col-6  text-lg-center`}>
                    <h6 className='text-underline'>{t('Transactions')}</h6>
                    <h5>21.2291 %</h5>
                </div>
            </div>
            <hr />

            <div className='row  '>
                <div className={`col-lg-3 col-md-4 col-6 ${i18next?.language === 'ar' ? 'border-start' : 'border-end'}`}>
                    <h6 className='text-underline'>{t('Average Vol')}</h6>
                    <h5>10.7 %</h5>
                </div>
                <div className={`col-lg-4 col-md-4 col-6 text-lg-center ${i18next?.language === 'ar' ? 'border-start' : 'border-end'}`}>
                    <h6 className='text-underline'>{t('Average Turnover')}</h6>
                    <h5>2.07 %</h5>
                </div>
                <div className={`col-lg-4 col-md-4 col-6  text-lg-center`}>
                    <h6 className='text-underline'>{t('Average Transactions')}</h6>
                    <h5>21.2291 %</h5>
                </div>
            </div>
        </section>
    )
}

export default MarketData