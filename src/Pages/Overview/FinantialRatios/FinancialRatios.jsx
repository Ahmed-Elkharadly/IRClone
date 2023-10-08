import { t } from 'i18next'
import './financialratios.scss'
import { NavLink } from 'react-router-dom'
function FinancialRatiosSection() {
    return (
        <section className='financial-ratios p-4'>
            <hr />
            <div className='d-flex justify-content-between align-items-center w-100'>
                <h5>{t('Financial Ratios')}</h5>
                <NavLink to={'/financial-ratios'} className='btn btn-transparent'>{t('Read More')} <i className='bi bi-arrow-up-short'></i></NavLink>
            </div>
            <hr />
            <div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3 '>
                    <h6>{t('Shares Outstanding')}</h6>
                    <h6>315.00</h6>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('EPS (SAR) (TTM)')}</h6>
                    <h6>0.14</h6>
                </div>

                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Shares Outstanding')}</h6>
                    <h6>315.00
                    </h6>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('EPS (SAR) (TTM)')}</h6>
                    <h6>0.14</h6>
                </div>

                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Shares Outstanding')}</h6>
                    <h6>315.00</h6>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('EPS (SAR) (TTM)')}</h6>
                    <h6>0.14</h6>
                </div>

                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Shares Outstanding')}</h6>
                    <h6>315.00</h6>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('EPS (SAR) (TTM)')}</h6>
                    <h6>0.14</h6>
                </div>

            </div>
        </section>
    )
}

export default FinancialRatiosSection