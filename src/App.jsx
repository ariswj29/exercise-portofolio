import './App.css'
import Header from './components/Header.jsx'
import Greeting from './components/Greeting.jsx'

function App() {
  return (
    <>
      <Header />
      <main className='bg-gray-400'>
        <Greeting />
      </main>
    </>
  )
}

export default App
