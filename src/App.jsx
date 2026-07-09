import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addbook from './components/Addbook'
import Search from './components/Search'
import Delete from './components/Delete'
import Navbar from './components/Navbar'
import Viewbooks from './components/Viewbooks'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/search" element={<Search />} />
          <Route path="/viewbook" element={<Viewbooks />} />
          <Route path="/delete" element={<Delete />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
