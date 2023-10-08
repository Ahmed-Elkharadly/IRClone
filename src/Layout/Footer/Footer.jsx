import i18next, { t } from 'i18next'
import './Footer.scss'
function Footer() {
  return (
    <div className="position-fixed bottom-0 bg-light py-4 pb-2 w-100">
      <ul className={`${i18next?.language === 'ar' ? 'ticker-ar' : 'ticker-en'} ticker py-1 list-unstyled d-flex m-0`}>
        <li><h6 className="m-0 text-uppercase">{t('price')}<span className="mx-1 text-bg-success custom-num"><i className="bi bi-graph-up-arrow mx-1"></i>2.17</span></h6></li>
        <li><h6 className="m-0 text-uppercase">{t('heigh')}<span className="mx-1 text-bg-success custom-num"><i className="bi bi-graph-up-arrow mx-1"></i>2.2</span></h6></li>
        <li><h6 className="m-0 text-uppercase">{t('low')}<span className="mx-1 text-bg-success custom-num"><i className="bi bi-graph-up-arrow mx-1"></i>2.17</span></h6></li>
        <li><h6 className="m-0 text-uppercase">{t('change')}<span className="mx-1 text-bg-danger custom-num"><i className="bi bi-graph-down-arrow mx-1"></i>0.02</span></h6></li>
        <li><h6 className="m-0 text-uppercase">{t('change')} (%)<span className="mx-1 text-bg-danger custom-num"><i className="bi bi-graph-down-arrow mx-1"></i>0.91</span></h6></li>
        <li><h6 className="m-0 text-uppercase"><span className="border px-2 mx-3 text-bg-primary">{t('latest-news')}</span>{t("Alhokair Group's Q2 profit spurred by tourism rebound, stronger demand for leisure: CEO")}</h6></li>
        <li><h6 className="m-0 text-uppercase"><span className="border px-2 mx-3 text-bg-primary">{t('cleander')}</span>{t('general assimbly')}<span className="border px-2 mx-3 text-bg-light">21-06-2023</span></h6></li>
      </ul>
    </div>
  )
}

export default Footer