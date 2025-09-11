import { useState, useEffect } from "react";
import PrimaryButton from "../../components/PrimaryButton.tsx";
import "../../styles/forms.scss";
const Contact = () => {
	const [activeInput, setActiveInput] = useState(null);
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [projectDetails, setProjectDetails] = useState("");
	const [errorObject, setErrorObject] = useState({});
	const [formStep, setFormStep] = useState(null);
	const [selectedService, setSelectedService] = useState(["Select A Service"]);

	const handleInputClick = (e) => {
		setActiveInput(e.target.id);
	};


	const subServices = {
		"Web Design": ["E-Commerce", "Personal Website", "Portfolio", "Business", "Blog", "Other"],
		"Web Development": ["Api", "Custom Software"],
		"Mobile Development": ["iOS", "Android", "Multiplatformed"],
		'Redesign': ["Website", "Application"],
	};

	const handleInput = (e) => {
		const category = e.target.id;
		switch (category) {
			case "First Name":
				setFirstname(e.target.value);
				break;
			case "Last Name":
				setLastname(e.target.value);
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

	const handleServiceInput = (e) => {
		setSelectedService(e.target.id);
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

	const subServiceComponents = selectedService.map((subservice) => {
		<option value={subservice}>{subservice}</option>;
	});

	return (
		<div className='contact-page-container'>
			{/* Contact Us Next Step Instructions */}
			<div className='text-content'>
				<div className='container-header text-white'>
					<h2>Contact Us</h2>
					<p>For General Inquiries and question please contact us at hello@simply.com</p>
				</div>
				{/* General Inquiry Section */}
				<form className='contactForm' action='submit'>
					{!formStep && (
						<div className='form-content'>
							<div className='form-container left'>
								<h2 className=''>Let's Discuss Your Project</h2>
								<h3 className=''>We just have a few questions</h3>
								<PrimaryButton
									label='Get Started'
									type='primary'
									action={() => setFormStep("General Information")}></PrimaryButton>
							</div>
							<div className='form-container right'>
								<p>
									Providing some basic information will allow us to gain a rough idea of your project's scope, duration,
									and cost.
								</p>
								<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident deserunt, eius alias ad arc</p>
							</div>
						</div>
					)}
					{formStep === "General Information" && (
						<div className='form-content'>
							<div className='form-container left'>
								<h2 className=''>Let's start off with some basic information</h2>
							</div>
							<div className='form-container right'>
								<div className='form-header'>General Information</div>
								<div className='input-container'>
									<div className='form-row'>
										<div className='form-div'>
											<label className={`form-label ${activeInput === "First Name" || firstName ? "active" : ""} `}>
												*First Name
											</label>
											<input
												id='First Name'
												className='form-input'
												type='text'
												onClick={handleInputClick}
												onChange={handleInput}
												value={firstName}
											/>
										</div>
										<div className='form-div'>
											<label className={`form-label ${activeInput === "Last Name" || lastName ? "active" : ""} `}>
												*Last Name
											</label>
											<input
												id='Last Name'
												className='form-input'
												type='text'
												onClick={handleInputClick}
												onChange={handleInput}
												value={lastName}
											/>
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

								<div className='input-container'>
									<div className='form-button'>
										<PrimaryButton label='Next' type='primary' action={() => setFormStep("Project Details")} />
									</div>
								</div>
							</div>


						</div>
					)}
					{formStep === "Project Details" && (
						<div className='form-content'>
							<div className='form-container left'>
								<h2 className=''>Now let's discuss project specifics</h2>
							</div>
							<div className='form-container right'>
								<div className='form-header'>Project Details</div>
								<div className='form-row'>
									<div className='form-column'>
										<p className='input-header'>Service Type</p>
										<div>
											<div className='form-row start'>
												<input type='checkbox' className='checkbox-input'></input>
												<label htmlFor=''>Web Design</label>
											</div>
											<div className='form-row start'>
												<input type='checkbox' className='checkbox-input'></input>
												<label htmlFor=''>Web Development</label>
											</div>
											<div className='form-row start'>
												<input type='checkbox' className='checkbox-input'></input>
												<label htmlFor=''>Mobile Development</label>
											</div>
											<div className='form-row start'>
												<input type='checkbox' className='checkbox-input'></input>
												<label htmlFor=''>Redesign</label>
											</div>
										</div>
									</div>
									<div className='form-column'>
										<div className='column-content'>
											<label className='input-header' htmlFor=''>
												Phase of Project
											</label>
											<select className='form-div select' name='' id=''>
												<option default> Select A Service</option>
												{selectedService && subServiceComponents}
											</select>
										</div>
										<div className='column-content'>
											<label className='input-header' htmlFor=''>
												Phase Of Project
											</label>
											<select className='form-div select' name='' id=''>
												<option default> Select A Phase</option>

												<option value=''>Ideation</option>
												<option value=''>Technical Documentation</option>
												<option value=''>MVP</option>
												<option value=''>Working Solution</option>
											</select>
										</div>
									</div>
								</div>
								<div className='text-area-container'>
									<label className='input-header'>Additional Details</label>
									<textarea className='input-textarea' name='' id=''></textarea>
								</div>

								<div className='input-container'>
									<div className='form-button'>
										<PrimaryButton label='Submit' type='primary' action={() => setFormStep("Complete")} />
									</div>
								</div>
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Contact;
