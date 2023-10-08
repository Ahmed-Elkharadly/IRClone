import { t } from "i18next"

function CompanyOverview() {
    return (
        <div className="overview-content">
            <h2 className="my-4">{t('Company Overview')}</h2>
            <span className="">{t('The Company Was Established In 1978 As A Sole Proprietorship Company Under The Name “Abdulmohsen Alhokair Group Company For Tourism And Development”, With A Capital Of SAR 274, 000. The Company Operates In Two Main Sectors; Hospitality, Which Includes The Management Of Hotels And Restaurants, And Entertainment Sector, Which Includes Operating And Managing Entertainment Centers And Malls.')}</span>
        </div>

    )
}

export default CompanyOverview