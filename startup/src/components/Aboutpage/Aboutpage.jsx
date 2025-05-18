import React from "react";
import { faker } from "@faker-js/faker";

const Aboutpage = () => {
	const paragraph1 = faker.lorem.paragraph(1);
	const paragraph2 = faker.lorem.paragraph(1);
	return (
		<div className='flex flex-col *:text-stone-400 [&_h1]:text-stone-600 items-center  [&_h1]:text-2xl  [&_div]:flex [&_div]:flex-col [&_div]:items-center px-50'>
			<div className='mb-20'>
				<h1>Our Story</h1>
				<p>
					{paragraph1}
				</p>
			</div>
			<div>
				<h1>The Process</h1>
				<p>
					{paragraph2}
				</p>
			</div>

			{/* Describing the company, what it is, what we do, why we do it, etc. */}

			{/* Describe the process we'll take the clients through  */}
		</div>
	);
};

export default Aboutpage;
