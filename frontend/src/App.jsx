import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
 import ServicePage from "./pages/ServicePage/ServicePage";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState, useContext } from "react";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
	const [isTopOfScreen, setIsTopOfScreen] = useState(true);

	const handleScroll = (e) => {
		e.target.scrollTop === 0 ? 	setIsTopOfScreen(true) : setIsTopOfScreen(false)
	}

	return (
		<div className='main-app' onScroll={handleScroll} >
			<Navbar isTopOfScreen={isTopOfScreen}></Navbar>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/services' element={<ServicePage />} />
				<Route path='/services/:service_id' element={<ServicePage />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
