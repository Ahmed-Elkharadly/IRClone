import { t } from 'i18next'
import { useEffect, useState } from 'react'

function ToggleBtn({ ActionFn, data, swichValue }) {
    const [btnsData, setBtnsData] = useState(data)
    useEffect(() => {
        setBtnsData(data)
        console.log(data)
    }, [data])

    return (
        <div className='d-flex justify-content-center align-items-center flex-wrap my-3'>
            {btnsData?.map((btn, i) => {
                return (
                    <button
                        key={i}
                        disabled={swichValue === btn?.value || btn?.default}
                        onClick={(e) => ActionFn(e)} value={btn.value}
                        className={`btn rounded-0 flex-grow-1 border-0 px-3 
                        ${((swichValue === btn?.value) || btn?.default)
                            && 'bi-check border-2 border-primary border-bottom bi-check text-primary'}
                    `}>
                        {t(btn.value)}</button>
                )
            })}

        </div>
    )
}

export default ToggleBtn