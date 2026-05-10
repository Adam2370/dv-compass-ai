import { HeroMain } from './HeroMain'
import { OfficialUpdatesPanel } from './OfficialUpdatesPanel'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pb-20 md:pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse dark:bg-violet-600/25"
          style={{ animationDuration: '5s' }}
        />
        <div
          className="absolute right-0 top-24 h-[380px] w-[380px] rounded-full bg-indigo-500/15 blur-[100px] animate-pulse dark:bg-indigo-500/20"
          style={{ animationDuration: '7s' }}
        />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[90px] dark:bg-fuchsia-600/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.22),transparent)] dark:opacity-100" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <HeroMain />
          </div>
          <div className="lg:col-span-5 w-full min-w-0">
            <OfficialUpdatesPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
