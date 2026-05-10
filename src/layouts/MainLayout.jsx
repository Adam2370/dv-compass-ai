import { Outlet } from 'react-router-dom'
import { DisclaimerStrip } from '../components/DisclaimerStrip'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { page } from '../theme/ui'

export function MainLayout() {
  return (
    <div className={page}>
      <DisclaimerStrip />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
