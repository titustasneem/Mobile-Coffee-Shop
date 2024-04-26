
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
// import Book from './components/Book'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
import OurStory from './components/Story'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      {/* <Book/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
       <OurStory/>
    </div>
  )
}

export default App
