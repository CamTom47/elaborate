import React from "react";
import { Link } from "react-router";

const Contact = () => {
	return (
		<div className='flex flex-col items-center gap-y-20 h-screen bg-stone-100 px-50 pt-20'>
			<h2 className='text-5xl font-bold'>How can we help?</h2>
			<div className="flex gap-x-20 [&>*]:text-xl [&>*]:bg-blue-400 [&>*]:border [&>*]:rounded-full [&>*]:p-2 [&>*]:hover:bg-blue-600 [&>*]:hover:text-white" >
				<Link>Schedule A Meeting</Link>
				<Link>Send an Email</Link>
			</div>
			{/* <form className="bg-stone-400 h-100 w-100 rounded-xl" action='submit'>
				<input className='bg-white' type='text' />
				<button>Submit</button>
			</form> */}
		</div>
	);
};

export default Contact;
