import { NavLink } from 'react-router-dom'
import i18next, { t } from 'i18next'
import { useEffect } from 'react'

function Aside({ children }) {
    const { language } = i18next
    

    return (
        <div className='container-lg mb-5' >
            <div className='row' >
                {/* Nav */}
                <div className='col-12 col-lg-3 col-md-12 m-0 p-0 d-flex justify-content-end shadow-sm h-100 '>
                    <button className="d-lg-none navbar-toggler bi bi-list border-0 p-2 py-0 rounded fs-3 m-3" aria-expanded="false" data-bs-toggle="offcanvas" aria-controls="alhokaiSidebar" aria-label="Toggle navigation" data-bs-target="#alhokaiSidebar" ></button>
                    <div className="offcanvas offcanvas-start show-lg" role="dialog" tabIndex="-1" aria-modal="true" aria-label="Close" id="alhokaiSidebar" data-bs-dismiss="offcanvas" aria-labelledby="alhokaiSidebarLabel">
                        <div className="offcanvas-header d-lg-none">
                            <button className="btn-close p-0 " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body fs-6 py-0 ">
                            <ul className="navbar-nav w-100 p-0" >
                                <NavLink className="nav-link p-2" to={`/overview?lang=${language}`}>{t('Overview')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/profile?lang=${language}`}>{t('Profile')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/board?lang=${language}`}>{t('Board & Management')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/chart?lang=${language}`}>{t('Chart')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/investmentCalculator?lang=${language}`}>{t('Investment Calculator')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/majorShareholders?lang=${language}`}>{t('Major Shareholders')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/negotiatedDeals?lang=${language}`}>{t('Negotiated Deals')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/financialStatements?lang=${language}`}>{t('Financial Statements')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/financialRatios?lang=${language}`}>{t('Financial Ratios')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/financialReports?lang=${language}`}>{t('Financial Reports')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/investorsPresentation?lang=${language}`}>{t('Investors Presentation')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/businessSegments?lang=${language}`}>{t('Business Segments')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/corporateActions?lang=${language}`}>{t('Corporate Actions')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/projects?lang=${language}`}>{t('Projects')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/analystCoverage?lang=${language}`}>{t('Analyst Coverage')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/disclosures?lang=${language}`}>{t('Disclosures')}</NavLink>
                                <NavLink className="nav-link p-2" to={`/subscriptionCenter?lang=${language}`}>{t('Subscription Center')}</NavLink>
                                <NavLink className="nav-link p-2 mb-2" to={`/contact?lang=${language}`}>{t('contact')}</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Rest Of Components */}
                <section className='col-lg-9 col-md-12 col-12 mt-3 ' >
                    <div className='container-lg'>
                        {children}
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Aside