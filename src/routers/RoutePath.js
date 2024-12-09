import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import ServicesPage from '../pages/ServicesPage';
import BlogDetailPage from '../pages/BlogDetailPage';
import TermsOfUsePage from '../pages/TermsOfUsePage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import ScheduleMeetingPage from '../pages/ScheduleMeetingPage';
import AcademyHomePage from '../pages/AcademyHomePage';
import ConsultancyDetailPage from '../pages/ConsultancyDetailPage';
import ReportingDetailPage from '../pages/ReportingDetailPage';
import InovationDetailPage from '../pages/InovationDetailPage';
import CarbonSolutionsDetailPage from '../pages/CarbonSolutionsDetailPage';
import SssPage from '../pages/SssPage';
import WeInTheMediaPage from '../pages/WeInTheMediaPage';
import GreenSupportsPage from '../pages/GreenSupportsPage';
import GreenSupportsDetailPage from '../pages/GreenSupportsDetailPage';
import SocialResponsibilityPage from '../pages/SocialResponsibilityPage';
import ExportSupportsPage from '../pages/ExportSupportsPage';
import ExportSupportsDetailPage from '../pages/ExportSupportsDetailPage';
import ExportSupportsDetailInDetailPage from '../pages/ExportSupportsDetailInDetailPage';
import YurtDisiSirket from '../pages/YurtDisiSirket';
import YatirimTesvik from '../pages/YatırımTesvik';

const RoutePath = () => {
    return (
        <Routes>
            <Route path='/yatirim-tesvik' element={<YatirimTesvik/>} />
            <Route path='/yurt-disi-sirket-danismanlik' element={<YurtDisiSirket/>} />
            <Route path='/' element={<HomePage />} />
            <Route path='/hakkimizda' element={<AboutPage />} />
            <Route path='/sosyal-sorumlulugumuz' element={<SocialResponsibilityPage />} />
            <Route path='/medyada-biz' element={<WeInTheMediaPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/iletisim' element={<ContactPage />}/>
            <Route path='/hizmetlerimiz' element={<ServicesPage />} />
            <Route path='/blog/:id' element={<BlogDetailPage />} />
            <Route path='/kullanim-kosullari' element={<TermsOfUsePage />} />
            <Route path='/gizlilik-politikasi' element={<PrivacyPolicyPage />} />
            <Route path='/sikca-sorulan-sorular' element={<SssPage />} />
            <Route path='/raporlama/:id' element={<ReportingDetailPage />} />
            <Route path='/danismanlik/:id' element={<ConsultancyDetailPage />} />
            <Route path='/yesil-destekler' element={<GreenSupportsPage />} />
            <Route path='/ihracat-destekleri'element={<ExportSupportsPage/>} />
            <Route path='/yesil-destekler/:id' element={<GreenSupportsDetailPage />} />
            <Route path='/ihracat-destekleri/:id' element={<ExportSupportsDetailPage />} />
            <Route path='/ihracat-destekleri/:id/:id2' element={<ExportSupportsDetailInDetailPage />} />
            <Route path='/eco-inovasyon/:id' element={<InovationDetailPage />} />
            <Route path='/karbon-cozumleri/:id' element={<CarbonSolutionsDetailPage />} />
            <Route path='/gorusme-ayarla' element={<ScheduleMeetingPage />} />
            <Route path='/akademi' element={<AcademyHomePage />} />
        </Routes>
    );
}

export default RoutePath;