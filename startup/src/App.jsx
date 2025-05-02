import './App.css'
import { Routes, Route } from "react-router"
import Homepage from "./components/Homepage/Homepage"
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import Services from "./components/Services/Services";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Contact from "./components/Contact/Contact";


function App() {

  return (
    <div className="App font-comfortaa bg-stone-950 w-screen h-screen overflow-y-scroll">
			<Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/casestudies" element={<CaseStudies/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
      
    </div>
  )
}

export default App
