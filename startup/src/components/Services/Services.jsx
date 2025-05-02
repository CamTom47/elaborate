import React, {useState} from "react";

const Services = () => {
  const services = {
    "Web Development": "Web Dev Description",
    "Web Development2": "Web Dev Description2",
    "Web Development3": "Web Dev Description3",
    "Web Development4": "Web Dev Description4",
    "Web Development5": "Web Dev Description5",
    "Web Development6": "Web Dev Description6"
  };


  const [activeSection, setActiveSection] = (services["Web Development"])

	return (
 		<div className="flex justify-between m-20 mt-30 gap-x-10 border border-white">
      <div className="w-3/8">
			<ul className="h-600 flex flex-col items-end [&_button]:text-stone-200 [&_button]:decoration-none [&_button]:text-2xl [&_button]:hover:text-stone-400 [&_button]:hover:duration-150">
				<button>Website Development</button>
				<button>Website Designing</button>
				<button>Website Redesigning</button>
				<button>CMS Website Development</button>
				<button>Web Appbuttoncation Development</button>
				<button>Ongoing Maintenance</button>
				<button>Site Hosting</button>
				<button>SEO?</button>
			</ul>
      </div>
      <div className="text-stone-200 w-3/4 text-2xl">
        {activeSection}
      </div>
		</div>
	);
};

export default Services;
