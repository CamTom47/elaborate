import React, { useEffect, useState } from "react";
import "./ServiceScroller.css";

const ServiceScroller = ({ handleSelection, scrollPosition, scrolling }) => {
	const [initialLoad, setInitialLoad] = useState(true);

	const buttonSelectionObject = {
		0: "website-development-nav",
		26: "website-design-nav",
		51: "website-redesign-nav",
		77: "cms-website-development-nav",
		100: "web-app-dev-nav",
	};
	console.log(buttonSelectionObject);

	const setActiveButton = (scrollPosition) => {
		const activeButton = document.querySelector(".active");
		if (buttonSelectionObject[scrollPosition]) {
			activeButton.classList.add("text-stone-400");
			activeButton.classList.remove("active");
			const buttonScrolledTo = document.getElementById(buttonSelectionObject[scrollPosition]);
			if (buttonScrolledTo) buttonScrolledTo.classList.add("active");
		}
	};

	const setSliderPosition = () => {
		//select the slider element
		const slider = document.querySelector("#slider");

		//let the initial node to be remove start at 0 index;
		let nodeToRemove = 0;
		//set the new node to be removed based on the list of nodes withing the slider classlist
		for (let [node, idx] of slider.classList) if (node.startsWith("translate")) nodeToRemove = idx;

		//remove the matching node
		slider.classList.remove(`${slider.classList[nodeToRemove]}`);

		//create an array of the buttonSelectionObject so that we can use the array's index;
		let selectionArray = Object.keys(buttonSelectionObject);

		console.log(selectionArray);
		console.log(scrollPosition);
		let currentIdx = selectionArray.indexOf(scrollPosition.toString());
		console.log("currentidx", currentIdx);

		if (currentIdx) {
			slider.classList.add(`translate-y-${currentIdx * 12}`);
		}
	};

	useEffect(() => {
		setActiveButton(scrollPosition);
		setSliderPosition();
	}, [scrollPosition]);

	const handleClick = (e) => {
		handleSelection();
		scrollToSection(e);
		if (initialLoad === true) {
			setInitialLoad(false);
		}
	};
	const scrollToSection = (e) => {
		const element = document.getElementById(e.target.id);
		document.getElementById(e.target.value).scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className='flex w-1/2 overflow-y-hidden'>
			<ul className='flex items-start [&_button]:text-2xl [&_button]:hover:text-stone-600 [&_button]:focus:text-stone-800 [&_button]:pe-2 [&_button]:duration-500'>
				<div className='flex flex-col items-end gap-y-4'>
					<button id='website-development-nav' className='active' value='website-development' onClick={handleClick}>
						Website Development
					</button>
					<button id='website-design-nav' className='text-stone-400' value='website-design' onClick={handleClick}>
						Website Design
					</button>
					<button id='website-redesign-nav' className='text-stone-400' value='website-redesign' onClick={handleClick}>
						Website Redesign
					</button>
					<button
						id='cms-website-development-nav'
						className='text-stone-400'
						value='cms-website-development'
						onClick={handleClick}>
						CMS Website Development
					</button>
					<button id='web-app-dev-nav' className='text-stone-400' value='web-app-dev' onClick={handleClick}>
						Web Application Development
					</button>
				</div>
				<div id='slider' className='border-r-2 h-8 w-.5'></div>
			</ul>
		</div>
	);
};

export default ServiceScroller;
