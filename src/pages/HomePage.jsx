import { HomeHero } from '../components/HomeHero'
import { JourneyStages } from '../components/JourneyStages'
import { VisaBulletinHomeCard } from '../components/VisaBulletinHomeCard'

export function HomePage() {
  return (
    <>
      <HomeHero />
      <VisaBulletinHomeCard />
      <JourneyStages />
    </>
  )
}
