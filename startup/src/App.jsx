import "./App.css";
import { Routes, Route } from "react-router";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import Services from "./components/Services/Services";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className='App flex flex-col font-comfortaa bg-stone-50 w-screen h-screen overflow-y-scroll'>
			<img src="src/assets/photos/vecteezy_abstract-boxes-background-modern-technology-with-square_8171873.jpg" alt=""  className="w-screen h-screen absolute top-0 left-0 z-0 opacity-30"/>
			<Navbar></Navbar>
			<Routes className="z-10">
				<Route path='/' element={<Homepage />} />
				<Route path='/about' element={<Aboutpage />} />
				<Route path='/services' element={<Services />} />
				<Route path='/portfolio' element={<CaseStudies />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
