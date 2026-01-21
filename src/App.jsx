import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <>
      <div className='w-full h-auto md:overflow-hidden  bg-white font-semibold'>
        <NavBar />
        <HeroSection />
      </div>
    </>
  )
}

export default App
