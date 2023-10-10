import { t } from 'i18next'
import React from 'react'

function PeriodBtn({ handlePeriod, period }) {
    return (
        <div className='d-flex justify-content-center align-items-center flex-wrap my-3'>
            <button
                onClick={(e) => handlePeriod(e)} value={'annual'}
                disabled={(period === 'annual' || period === '')}
                className={`btn rounded-0 flex-grow-1 px-3 border-0 
                    ${(period === 'annual' || period === '') && ' bi-check border-2 border-primary border-bottom bi-check text-primary '}
                `}
            >
                {t('Annual')}</button>
            <button
                disabled={period === 'quarter'}
                onClick={(e) => handlePeriod(e)} value={'quarter'}
                className={`btn rounded-0 flex-grow-1 border-0 px-3 
                    ${period === 'quarter' && 'bi-check border-2 border-primary border-bottom bi-check text-primary  '}
                `}
            >
                {t('Quarter')}</button>
        </div>
    )
}

export default PeriodBtn