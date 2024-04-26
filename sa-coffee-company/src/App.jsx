
import './App.css'
import About from './components/About'
import Book from './components/Book'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Book/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
