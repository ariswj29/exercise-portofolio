import './styles/App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <main className='bg-gray-400 h-screen content-center'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
