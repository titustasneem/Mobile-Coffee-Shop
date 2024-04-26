import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Book from "./components/Book";
// import Contact from './components/Contact'
import Footer from "./components/Footer";

import OurStory from "./components/Story";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const checkNavSection = () => {
    switch (state) {
      case "Home":
        return <Home />;
      case "Our Story":
        return <OurStory />;
      case "Booking":
        return <Book />;
      case "About":
        return <About />;
      default:
        return (
          <>
            <Home />
            <About />
            <Book />
            {/* <Contact/> */}

            <OurStory />
            <Footer />
          </>
        );
    }
  };
  return (
    <div className="App">
      <Navbar setState={setState} />
      {checkNavSection()}
    </div>
  );
}

export default App;
