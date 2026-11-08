import Navbar from './components/Navbar'
import PortfolioInfo from './components/PortfolioInfo'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <PortfolioInfo />
          </div>

          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
