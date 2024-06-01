import './styles/App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Data from "./data.js";

function App() {
  return (
    <>
      <Header data={Data().dataNavbar} />
      <main className='bg-gray-400 sm:h-screen content-center'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
