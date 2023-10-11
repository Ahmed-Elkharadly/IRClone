import i18next, { t } from "i18next"
import { NavLink, Outlet } from "react-router-dom"
import './overview.scss'
function OverviewPage() {
    const { language } = i18next
    return (
        <div className="overview">
            <ul className="nav nav-underline flex-sm-fill p-0 d-flex justify-content-between align-items-center">
                <li className="nav-item "><NavLink className='nav-link' to={`market-data?lang=${language}`}>{t('Market Data')}</NavLink></li>
                <li className="nav-item"><NavLink className='nav-link' to={`financial-ratios?lang=${language}`}>{t('Finantial Ratios')}</NavLink></li>
                <li className="nav-item"><NavLink className='nav-link' to={`corporate-actions?lang=${language}`}>{t('Corporate Actions')}</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default OverviewPage