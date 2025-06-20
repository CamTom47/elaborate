import React, { useEffect, useState } from "react";

const ListNavigator = ({ handleSelection, scrollPosition, scrolling, navList }) => {
	//Initial Selection of the different navs
	const [initialLoad, setInitialLoad] = useState(true);
	const [navListTabs, setNavListTabs] = useState([]);

	//array to be used to populate list navigator component

	const convertToId = (stringArray) => {
		for (let string of stringArray) {
			const newObj = {};
			newObj.content = string;
			const newString = string.replace(/-/gm, " ").toLowerCase().split(" ").join("-");
			newObj.id = newString;
			navListTabs.push(newObj);
		}
	};

	//TODO revisit this. This will dictate the active nav when scrolling using breakpoints
	const buttonSelectionObject = {
		0: "website-design",
		26: "web-development",
		51: "mobile-development",
		77: "cms-website-development",
		100: "app-redesign",
	};

	const setActiveButton = (scrollPosition) => {
		const activeButton = document.querySelector(".active");
		if (buttonSelectionObject[scrollPosition]) {
			activeButton.classList.add("text-stone-400");
			activeButton.classList.remove("active");
			const buttonScrolledTo = document.getElementById(buttonSelectionObject[scrollPosition]);
			if (buttonScrolledTo) buttonScrolledTo.classList.add("active");
		}
	};

	// const setSliderPosition = () => {
	// 	//select the slider element
	// 	const slider = document.querySelector("#slider");

	// 	//let the initial node to be remove start at 0 index;
	// 	let nodeToRemove = 0;
	// 	//set the new node to be removed based on the list of nodes withing the slider classlist
	// 	for (let [node, idx] of slider.classList) if (node.startsWith("translate")) nodeToRemove = idx;

	// 	//remove the matching node
	// 	slider.classList.remove(`${slider.classList[nodeToRemove]}`);

	// 	//create an array of the buttonSelectionObject so that we can use the array's index;
	// 	let selectionArray = Object.keys(buttonSelectionObject);

	// 	console.log(selectionArray);
	// 	console.log(scrollPosition);
	// 	let currentIdx = selectionArray.indexOf(scrollPosition.toString());
	// 	console.log("currentidx", currentIdx);

	// 	if (currentIdx) {
	// 		slider.classList.add(`translate-y-${currentIdx * 12}`);
	// 	}
	// };

	// useEffect(() => {
	// 	setActiveButton(scrollPosition);
	// 	setSliderPosition();
	// }, [scrollPosition]);

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

	const navComponents = navListTabs.map((nav, idx) => <a href="" target="#" key={idx} id={nav.id} onClick={handleSelection}>{nav.content}</a>);

	useEffect(() => {
		convertToId(navList);
	}, []);

	return (
		<div className='w-full rounded-2xl py-1 bg-sky-300 shadow-md text-black self-center'>
			<ul className='flex justify-around font-semibold text-black'>{navComponents}</ul>
		</div>
	);
};

export default ListNavigator;
