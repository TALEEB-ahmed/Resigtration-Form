import Title1 from './components/Title1'
import Title2 from './components/Title2'
import Forme from './components/Forme'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div dir="rtl"  className="min-h-screen bg-[radial-gradient(ellipse_at_top,_rgba(35,107,70,0.10),_transparent_55%),linear-gradient(135deg,_#f5f7f1,_#fffdf7_55%,_#f1f5ed)] text-secondary">
      <Title1 />
      <Title2 />
      <Forme />
      <Footer />
    </div>
  )
}

export default App
