import "./App.css";
import { Routes, Route } from "react-router";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import ServicePage from "./components/ServicePage/ServicePage";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/about' element={<Aboutpage />} />
				<Route path='/services' element={<ServicePage />}/>
				<Route path='/services/:service_id' element={<ServicePage />}/>
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
