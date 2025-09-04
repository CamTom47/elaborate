import { useState, useEffect } from "react";
import PrimaryButton from "../../components/PrimaryButton.tsx";
import "../../styles/forms.scss";
const Contact = () => {
	const [activeInput, setActiveInput] = useState(null);
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [projectDetails, setProjectDetails] = useState("");
	const [errorObject, setErrorObject] = useState({});

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
				<p>For General Inquiries and question please contact us at hello@simply.com</p>
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
			<form className='contactForm' action='submit'>
				<div className='form-header'>General Information</div>
				<p>* Required Field</p>
				<div className='input-container'>
					<div className='form-row'>
						<div className='form-div'>
							<label className={`form-label ${activeInput === "Name" || name ? "active" : ""} `}>*Name</label>
							<input
								id='Name'
								className='form-input'
								type='text'
								onClick={handleInputClick}
								onChange={handleInput}
								value={name}
							/>
						</div>
						<div className='form-div'>
							<label className={`form-label ${activeInput === "Phone Number" || number ? "active" : ""}`}>
								*Phone Number
							</label>
							<input
								id='Phone Number'
								className='form-input'
								type='text'
								onClick={handleInputClick}
								onChange={handleInput}
								value={number}
							/>
							{errorObject.numberError && <span className='text-red-500'>{errorObject.numberError.message}</span>}
						</div>
					</div>
					<div className='form-div'>
						<label className={`form-label ${activeInput === "Email" || email ? "active" : ""} `}>*Email</label>
						<input
							id='Email'
							className='form-input'
							type='text'
							onClick={handleInputClick}
							value={email}
							onChange={handleInput}
						/>
					</div>

					{/* <div className={`projectDetails ${activeInput === "Project Details" || projectDetails ? "active" : ""}`}>
						<label className={`${activeInput === "Project Details" || projectDetails ? "active" : ""}`}>
							Project Details
						</label>
						<textarea
							id='Project Details'
							className={`contactForm ${activeInput === "Project Details" ? "active" : ""}`}
							type='textarea'
							rows='5'
							cols='33'
							onChange={handleInput}
							onClick={handleInputClick}
							value={projectDetails}></textarea>
					</div> */}
				</div>

				{/* <div className='input-container close'>
					<div className='form-header'>Project Details</div>
					<p>Type Of Project</p>
					<div className='form-row'>
						<div className='form-row start'>
							<input type='checkbox' className='checkbox-input'></input>
							<label htmlFor=''>Web Design</label>
						</div>
						<div className='form-row start'>
							<input type='checkbox' className='checkbox-input'></input>
							<label htmlFor=''>Web Development</label>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-row start'>
							<input type='checkbox' className='checkbox-input'></input>
							<label htmlFor=''>Mobile Development</label>
						</div>
						<div className='form-row start'>
							<input type='checkbox' className='checkbox-input'></input>
							<label htmlFor=''>Redesign</label>
						</div>
					</div>
					<p>Stage Of Project</p>
					<div className='form-row'>
						<div className='form-row start'>
							<input type='radio' className='radio-input'></input>
							<label htmlFor=''>Web Design</label>
						</div>
						<div className='form-row start'>
							<input type='radio' className='radio-input'></input>
							<label htmlFor=''>Web Development</label>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-row start'>
							<input type='radio' className='radio-input'></input>
							<label htmlFor=''>Mobile Development</label>
						</div>
						<div className='form-row start'>
							<input type='radio' className='radio-input'></input>
							<label htmlFor=''>Redesign</label>
						</div>
					</div>
				</div> */}
				<div className='input-container'>
					<div className='form-button'>
						<PrimaryButton label='Submit' type='primary' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default Contact;
