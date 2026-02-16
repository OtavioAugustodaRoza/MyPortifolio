import './App.css'
import Whoisme from './components/Whoisme'
import MyProjects from './components/MyProjects'
import TalkWithUs from './components/TalkWithUs'

function App() {
  return (
    <main className="flex flex-col  ">
      <Whoisme />
      <MyProjects />
      <TalkWithUs />
    </main>
  )
}

export default App
