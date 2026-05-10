import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageProvider'
import { ThemeProvider } from './context/ThemeProvider'
import { MainLayout } from './layouts/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { AskAiPage } from './pages/AskAiPage'
import { CommunityPage } from './pages/CommunityPage'
import { CountryGuidesPage } from './pages/CountryGuidesPage'
import { Ds260Page } from './pages/Ds260Page'
import { DvProcessPage } from './pages/DvProcessPage'
import { EmbassyMedicalPage } from './pages/EmbassyMedicalPage'
import { HomePage } from './pages/HomePage'
import { InterviewsPage } from './pages/InterviewsPage'
import { LifeAmericaPage } from './pages/LifeAmericaPage'
import { NewsPage } from './pages/NewsPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { RoadmapPage } from './pages/RoadmapPage'
import { ScamPage } from './pages/ScamPage'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dv-process" element={<DvProcessPage />} />
            <Route path="/ds-260" element={<Ds260Page />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/country-guides" element={<CountryGuidesPage />} />
            <Route path="/embassy-medical" element={<EmbassyMedicalPage />} />
            <Route path="/interviews" element={<InterviewsPage />} />
            <Route path="/life-america" element={<LifeAmericaPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/ask-ai" element={<AskAiPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/scam" element={<ScamPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  )
}
