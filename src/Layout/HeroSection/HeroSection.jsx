import { useTranslation } from "react-i18next"
import i18next from "i18next"
import { useNavigate, useLocation, Link } from 'react-router-dom'
import './HeroSection.scss'
import { supportedLanguage } from '../../Utilities/supportedLanguage'

function HeroSection() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()

    const changeLanguage = (language) => {
        i18next.changeLanguage(language)
        navigate(`${location.pathname}?lang=${language}`)
    }

    return (
        <div className="hero-container sticky-top" >
            <header className="header">
                <div className="logo m-0 p-0">
                    <img height="100px" src="/logo.png" alt="" />
                </div>
                <div className="mx-3">
                    {supportedLanguage?.map((lang) => (
                        <button key={lang}
                            className={i18next.resolvedLanguage === lang ? 'd-none' : 'btn btn-outline-light btn-sm px-3 '}
                            onClick={() => changeLanguage(lang)}
                            disabled={i18next.resolvedLanguage === lang}
                        >
                            {lang === 'ar' ? t('Arabic') : t('English')}
                            <i className="bi bi-translate m-1"></i>
                        </button>))}
                </div>
            </header>

            <section className="hero-statics text-light container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 d-lg-block d-none ir-box fw-bolder">
                        <h1 >{t('ir')}</h1>
                        <h6>
                            <i className="bi bi-telephone-fill m-1"></i>
                            <Link className="text-light fw-bolder" to={'tel:123456789'}>
                                {'+20123456789'}
                            </Link>
                        </h6>
                        <h6>
                            <Link className="text-light fw-bolder" to={'mailto:info@mail.com'}>
                                <i className="bi bi-envelope-at-fill m-1"></i>
                                {'info@mail.com'}
                            </Link>

                        </h6>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 my-lg-0 my-5">
                        <i className="bi bi-info-circle-fill m-1"></i>
                        <span className="">{t('data-delayed')}</span>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 my-lg-0 my-5">
                        <h1 className="fs-4">{t('price-sar')}</h1>
                        <span className="fs-5">2.19</span>
                    </div>
                    <div className="col-lg-3 col-4 my-lg-0 my-5">
                        <h1 className="fs-4">{t('change-sar')}</h1>
                        <span className="fs-5">-0.01</span>
                    </div>
                    <div className="col-lg-1 col-2 ">
                        <h1 className="fs-4">%</h1>
                        <span className="fs-5">-0.45</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection