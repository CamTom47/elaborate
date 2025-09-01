import "./App.css";
import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Navbar from "../src/pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import ServicePage from "./pages/ServicePage/ServicePage";
import Contact from "./pages/Contact/Contact";

function App() {
	return (
		<div className='App bg-linear-to-r from-blue-600 from-10% via-blue-500 via-90% to-blue-600'>
			<Navbar></Navbar>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/services' element={<ServicePage />}/>
				<Route path='/services/:service_id' element={<ServicePage />}/>
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
