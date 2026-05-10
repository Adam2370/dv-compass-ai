import { LanguageProvider } from './context/LanguageProvider'
import { AboutMission } from './components/AboutMission'
import { AskAI } from './components/AskAI'
import { CommunitySection } from './components/CommunitySection'
import { CountryGuides } from './components/CountryGuides'
import { DisclaimerStrip } from './components/DisclaimerStrip'
import { DocumentRoadmap } from './components/DocumentRoadmap'
import { DVLotterySection } from './components/DVLotterySection'
import { DVTimeline } from './components/DVTimeline'
import { DS260Guide } from './components/DS260Guide'
import { EmbassyMedical } from './components/EmbassyMedical'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InterviewExperiences } from './components/InterviewExperiences'
import { JourneyStages } from './components/JourneyStages'
import { LifeInAmerica } from './components/LifeInAmerica'
import { Navbar } from './components/Navbar'
import { NewsSection } from './components/NewsSection'
import { OfficialResources } from './components/OfficialResources'
import { ScamDetector } from './components/ScamDetector'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-violet-500/40 selection:text-white">
        <DisclaimerStrip />
        <Navbar />
        <main>
          <Hero />
          <JourneyStages />
          <DVTimeline />
          <DVLotterySection />
          <DS260Guide />
          <DocumentRoadmap />
          <CountryGuides />
          <EmbassyMedical />
          <InterviewExperiences />
          <AskAI />
          <ScamDetector />
          <NewsSection />
          <LifeInAmerica />
          <CommunitySection />
          <OfficialResources />
          <AboutMission />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
