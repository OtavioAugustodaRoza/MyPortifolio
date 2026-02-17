import './App.css'
import Whoisme from './components/Whoisme'
import MyProjects from './components/MyProjects'
import TalkWithUs from './components/TalkWithUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col">
        <Whoisme />
        <MyProjects />
        <TalkWithUs />
      </main>

      <Footer />
    </div>
  )
}

export default App
