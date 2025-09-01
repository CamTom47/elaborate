import { useState, useEffect } from "react";
import Primarybutton from "../../components/PrimaryButton.tsx";
import { error, type } from "jquery";

const Contact = () => {
	const [activeInput, setActiveInput] = useState(null);
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [projectDetails, setProjectDetails] = useState("");
	const [errorObject, setErrorObject] = useState({});

	useEffect( () => {
		handle
	})

	const handleInputClick = (e) => {
		setActiveInput(e.target.id);
	};

	const handleInput = (e) => {
		const category = e.target.id;
		switch (category) {
			case "Name":
				setName(e.target.value);
				break;
			case "Email":
				setEmail(e.target.value);
				break;
			case "Phone Number":
				handleNumberInput(e.target.value);
				break;
			case "Project Details":
				setProjectDetails(e.target.value);
				break;
		}
	};

	const handleNumberInput = (value) => {

		//verify that the input is a number
		const integer = new Number(value);
		if (isNaN(integer)) {
			errorObject.numberError = {
				message: "Input must be a number",
			};
			setErrorObject(errorObject);
		} else {
			setNumber(value);
		}
		return;
	};

	return (
		<div className='flex justify-between gap-y-20 h-screen px-50 pt-20 bg-linear-to-r from-blue-600 from-10% via-blue-500 via-50% to-blue-600 to-90%'>
			{/* Contact Us Next Step Instructions */}
			<div className='w-3/8'>
				<h2 className='text-4xl font-bold text-white mb-6'>Contact Us</h2>
				<h3 className='text-white text-xl mb-6'>Next Steps</h3>
				<div className='flex flex-col gap-y-6'>
					<div className='flex gap-x-4 items-center'>
						<p className='flex justify-center items-center text-xl size-8 rounded-full bg-white text-blue-500 font-semibold'>
							1
						</p>
						<p className='text-white'>Our team will evaluate the details of your project.</p>
					</div>
					<div className='flex gap-x-4 items-center'>
						<p className='flex justify-center items-center text-xl size-8 rounded-full bg-white text-blue-500 font-semibold'>
							2
						</p>
						<p className='text-white'>We'll be in contact with you to discuss the analysis.</p>
					</div>
					<div className='flex gap-x-4 items-center justify-between'>
						<p className='flex justify-center items-center text-xl size-8 rounded-full bg-white text-blue-500 font-semibold'>
							3
						</p>
						<p className='text-white text-wrap w-7/8'>
							Our team will put together a proposal with an estimate and project schedule.
						</p>
					</div>
				</div>
			</div>
			{/* General Inquiry Section */}
			<form
				className='flex flex-col justify-between items-center bg-white h-fit gap-y-12 rounded-xl w-1/2 p-12 [&_input]:w-full [&_input]:pb-2 [&_input]:text-xl'
				action='submit'>
				<span className='border-b border-black  w-full relative'>
					<span
						className={`${
							activeInput === "Name" || name ? "text-md -translate-y-full" : "text-xl"
						} absolute duration-200`}>
						Name
					</span>
					<input
						id='Name'
						className={`focus:outline-none`}
						type='text'
						onClick={handleInputClick}
						onChange={handleInput}
						value={name}
					/>
				</span>
				<span className='border-b border-black  w-full relative'>
					<label
						className={`${
							activeInput === "Phone Number" || number ? "text-md -translate-y-full" : "text-xl"
						} absolute duration-200`}>
						Phone Number
					</label>
					<input
						id='Phone Number'
						className='focus:outline-none'
						type='text'
						onClick={handleInputClick}
						onChange={handleInput}
						value={number}
					/>
					{errorObject.numberError && <span className='text-red-500'>{errorObject.numberError.message}</span>}
				</span>
				<span className='border-b border-black  w-full relative'>
					<label
						className={`${
							activeInput === "Email" || email ? "text-md -translate-y-full" : "text-xl"
						} absolute duration-200`}>
						Email
					</label>
					<input
						id='Email'
						className='focus:outline-none'
						type='text'
						onClick={handleInputClick}
						value={email}
						onChange={handleInput}
					/>
				</span>

				<span className='relative flex flex-col border-b border-black  w-full'>
					<label
						className={`${
							activeInput === "Project Details" || projectDetails ? "text-md translate-y-full" : "text-xl"
						} absolute duration-200 bottom-0`}>
						Project Details
					</label>
					<textarea
						id='Project Details'
						className='focus:outline-none resize-none focus:border focus:rounded-md duration-200 p-2'
						type='textarea'
						rows='5'
						cols='33'
						onChange={handleInput}
						onClick={handleInputClick}
						value={projectDetails}></textarea>
				</span>

				<Primarybutton label='Submit' type='primary' />
			</form>
		</div>
	);
};

export default Contact;
