import React, { useEffect, useState } from "react";
import '../styles/components/SliderNav.scss'

const SliderNav = ({ handleSelection, navList, activeSelection }) => {
	//Initial Selection of the different navs
	const [initialLoad, setInitialLoad] = useState(true);
	const [navListTabs, setNavListTabs] = useState([]);

	useEffect(() => {
		convertToId(navList);
	}, []);

	//array to be used to populate list navigator component

	const convertToId = (stringArray = []) => {
		const newArray = [];
		for (let string of stringArray) {
			const newObj = {};
			newObj.content = string;
			const newString = string.replace(/-/gm, " ").toLowerCase().split(" ").join("-");
			newObj.id = newString;
			newArray.push(newObj);
		}
		setNavListTabs(newArray);
	};

	const handleClick = (e) => {
		// 	handleSelection();
		scrollToSection(e);
		if (initialLoad === true) {
			setInitialLoad(false);
		}
	};
	const scrollToSection = (e) => {
		const element = document.getElementById(e.target.id);
		document.getElementById(e.target.value).scrollIntoView({ behavior: "smooth" });
	};

	let navComponents = navListTabs.map((nav, idx) => (
		<a className={`navcomponent ${activeSelection === nav}`} href='' target='#' key={idx} id={nav.id} onClick={handleSelection}>
			{nav.content}
		</a>
	));

	return (
		<div id="slider-nav" className='navslider-container'>
			<div className='navcomponents'>{navComponents}</div>
		</div>
	);
};

export default SliderNav;
