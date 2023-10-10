import { t } from 'i18next'

function CurrencyBtn({ handleCurrency, currency }) {
    return (
        <div className='d-flex justify-content-center align-items-center flex-wrap my-3'>
            {/* <h4 className='mx-2 fw-bold'>{t('currency')} : </h4> */}
            <button
                onClick={(e) => handleCurrency(e)} value={'sar'}
                disabled={(currency === 'sar' || currency === '')}
                className={`btn rounded-0 flex-grow-1  checkdiv border-0 
                    ${(currency === 'sar' || currency === '') && 'border-2 border-primary border-bottom bi-check text-primary '}
                `}
            >
                {t('SAR')}</button>
            <button
                disabled={currency === 'usd'}
                onClick={(e) => handleCurrency(e)} value={'usd'}
                className={`btn rounded-0 flex-grow-1  checkdiv border-0 
                    ${currency === 'usd' && 'border-2 border-primary border-bottom bi-check text-primary '}
                `}
            >
                {t('USD')}</button>
        </div>
    )
}

export default CurrencyBtn