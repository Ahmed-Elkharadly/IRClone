import { t } from 'i18next'
import './corporateactions.scss'
import { NavLink } from 'react-router-dom'
function CorporateActions() {
    return (
        <section className='financial-ratios p-4'>
            <hr />
            <div className='d-flex justify-content-between align-items-center w-100'>
                <h5>{t('Corporate Actions')}</h5>
                <NavLink to={'/corporate-actions'} className='btn btn-transparent'>{t('Read More')} <i className='bi bi-arrow-up-short'></i></NavLink>
            </div>
            <hr />
            <div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3 '>
                    <h6>{t('Previous Capital')}</h6>
                    <h6>650.00</h6>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Previous No. of Shares (M)')}</h6>
                    <h6>51.54</h6>
                </div>

                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Previous Capital')}</h6>
                    <h6>315.00
                    </h6>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Previous No. of Shares (M)')}</h6>
                    <h6>650.00</h6>
                </div>

                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Previous Capital')}</h6>
                    <h6>315.00</h6>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Previous No. of Shares (M)')}</h6>
                    <h6>650.00</h6>
                </div>

                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Previous Capital')}</h6>
                    <h6>315.00</h6>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 my-3'>
                    <h6>{t('Previous No. of Shares (M)')}</h6>
                    <h6>650.00</h6>
                </div>

            </div>
        </section>
    )
}

export default CorporateActions