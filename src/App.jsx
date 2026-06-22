import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
