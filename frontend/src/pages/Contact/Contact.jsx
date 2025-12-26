import { useState, useEffect } from "react";
import MessageAPI from "../../API/MessageAPI.js";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";

import ButtonPrimary from "../../components/ButtonPrimary.tsx";

const Contact = () => {
	const [formStep, setFormStep] = useState(null);
	const [selectedServices, setSelectedServices] = useState(["Web Design"]);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		companyName: "",
		projectDetails: "",
		selectedServices: selectedServices,
		projectPhase: "",
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleInput = (e) => {
		let category = "";
		if (e.target.id) category = e.target.id;
		else category = e.target.type;

		switch (category) {
			case "firstName":
				setFormData({ ...formData, firstName: e.target.value });
				break;
			case "lastName":
				setFormData({ ...formData, lastName: e.target.value });
				break;
			case "phoneNumber":
				setFormData({ ...formData, phoneNumber: e.target.value });
				break;
			case "email":
				setFormData({ ...formData, email: e.target.value });
				break;
			case "companyName":
				setFormData({ ...formData, companyName: e.target.value });
				break;
			case "projectDetails":
				setFormData({ ...formData, projectDetails: e.target.value });
				break;
			case "checkbox":
				if (e.target.checked) {
					setSelectedServices(new Array(...selectedServices, e.target.value));

					setFormData({ ...formData, selectedServices: new Array(...selectedServices, e.target.value) });
				} else {
					setSelectedServices(selectedServices.filter((service) => service !== e.target.value));
					setFormData({
						...formData,
						selectedServices: selectedServices.filter((service) => service !== e.target.value),
					});
				}
				break;
			case "projectPhase":
				setFormData({ ...formData, projectPhase: e.target.value });
				break;
		}
	};

	const onSubmit = (data) => {
		if (formStep === "General Information") setFormStep("Project Details");
		else if (formStep === "Project Details") {
			setFormStep("Complete");
			sendFormSubmissionEmail();
		} else return;
	};

	/**
	 * Process the form information and send an email
	 */
	const sendFormSubmissionEmail = async () => {
		MessageAPI.processContactForm(formData);
	};

	return (
		<div className=' flex flex-col justify-center h-fit border-box w-full items-center overflow-y-scroll bg-background-primary md:px-12 2xl:px-20'>
			{/* General Inquiry Section */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col justify-center px-4 h-(--content) w-full xl:px-80 2xl:mx-80'
				action='submit'>
				{!formStep && (
					<div className='flex flex-col justify-center items-center text-center gap-y-12'>
						<h2 className='content-description'>
							If you're ready to get your project started, curious about how much it'll cost, or are wondering if your
							idea is feasible.{" "}
						</h2>
						<h3 className='text-xl font-bold text-base'>We're ready to help.</h3>
						<ButtonPrimary
							label='Get Started'
							type='primary'
							dark={true}
							action={() => setFormStep("General Information")}></ButtonPrimary>
					</div>
				)}
				{formStep === "General Information" && (
					<div className='bg-primary-dark p-4 rounded-md flex flex-col justify-center md:mx-20 lg:mx-40 2xl:mx-80'>
						<div className='w-full text-center  text-primary'>
							<h2>Let's start off with some basic information</h2>
						</div>
						<div className='flex flex-col gap-y-4 py-8 '>
							<div className='flex flex-col gap-y-4 [&_input]:rounded-md [&_input]:w-full [&_input]:border [&_input]:border-base [&_input]:h-8 [&_input]:px-2 [&_input]:bg-white'>
								<div className='form-div'>
									<label className='text-xl text-base font-light'>First Name</label>
									{errors.firstName?.type === "required" && <p role='alert'>First name is required</p>}
									<input
										{...register("firstName", { required: { value: true, message: "First Name is required" } })}
										aria-invalid={errors.firstname ? "true" : "false"}
										id='firstName'
										type='text'
										onChange={handleInput}
										value={formData.firstName}
									/>
								</div>
								<div className='form-div'>
									<label className='text-xl text-base font-light'>Last Name</label>
									{errors.lastName?.type === "required" && <p role='alert'>Last name is required</p>}
									<input
										{...register("lastName", { required: { value: true, message: "Last Name is required" } })}
										aria-invalid={errors.lastName ? "true" : "false"}
										id='lastName'
										type='text'
										onChange={handleInput}
										value={formData.lastName}
									/>
								</div>

								<div className='form-div'>
									<label className='text-xl text-base font-light'>Phone Number</label>
									{errors.phoneNumber?.type === "required" && <p role='alert'>Phone Number is required</p>}
									{errors.phoneNumber?.type === "pattern" && <p role='alert'>{errors.phoneNumber.message}</p>}
									<input
										{...register("phoneNumber", {
											required: { value: true, message: "Phone Number is required" },
											pattern: {
												value: /(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/,
												message: "This is not a valid phone number",
											},
											message: "Invalid Phone Number",
										})}
										id='phoneNumber'
										type='text'
										onChange={handleInput}
										value={formData.phoneNumber}
									/>
								</div>
								<div className='form-div'>
									<label className='text-xl text-base font-light'>Company Name</label>
									<input id='companyName' type='text' onChange={handleInput} value={formData.companyName} />
								</div>
								<div className='form-div'>
									<label className='text-xl text-base font-light'>Email</label>
									{errors.email?.type === "required" && <p role='alert'>{errors.email.message}</p>}
									{errors.email?.type === "pattern" && <p role='alert'>{errors.email.message}</p>}
									<input
										{...register("email", {
											required: { value: true, message: "Email is required" },
											pattern: {
												value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
												message: "This does not match a valid email address",
											},
										})}
										id='email'
										type='text'
										value={formData.email}
										onChange={handleInput}
									/>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-y-4 lg:flex-row lg:justify-around'>
							<ButtonPrimary label='Cancel' type='primary' action={() => setFormStep("")} />
							<ButtonPrimary label='Next' type='primary' dark={true} action={handleSubmit(onSubmit)} />
						</div>
					</div>
				)}

				{/* Project Details Section */}
				{formStep === "Project Details" && (
					<div className='p-4 rounded-md flex flex-col justify-center gap-y-8 md:mx-20 lg:mx-40 2xl:mx-80'>
						<div className='w-full text-center text-primary'>
							<h2 className='content-description'>Now let's discuss project specifics</h2>
						</div>
						<div className='flex flex-col justify-between gap-y-8 lg:grid lg:grid-cols-2'>
							<div className='flex flex-col gap-y-4'>
								<p className='text-xl text-base font-light'>Service Type</p>
								<div className='flex flex-col [&_label]:text-base gap-y-2 lg:gap-y-0'>
									<div className='flex gap-x-4 items-center'>
										<input
											value='Web Design'
											onChange={handleInput}
											type='checkbox'
											className='size-4'
											defaultChecked></input>
										<label htmlFor=''>Web Design</label>
									</div>
									<div className='flex gap-x-4 items-center'>
										<input value='Web Development' onChange={handleInput} type='checkbox' className='size-4'></input>
										<label htmlFor=''>Web Development</label>
									</div>
									<div className='flex gap-x-4 items-center'>
										<input value='Mobile Development' onChange={handleInput} type='checkbox' className='size-4'></input>
										<label htmlFor=''>Mobile Development</label>
									</div>
									<div className='flex gap-x-4 items-center'>
										<input value='Redesign' onChange={handleInput} type='checkbox' className='size-4'></input>
										<label htmlFor=''>Redesign</label>
									</div>
								</div>
							</div>

							<div className='flex flex-col gap-y-4'>
								<label className='text-xl text-base font-light' htmlFor=''>
									Phase Of Project
								</label>
								<select
									onChange={handleInput}
									className='rounded-md w-full border border-base bg-white px-4 h-8'
									name=''
									id='projectPhase'>
									<option default> Select A Phase</option>
									<option value='Ideation'>Ideation</option>
									<option value='Technical Documentation'>Technical Documentation</option>
									<option value='MVP'>MVP</option>
									<option value='Working Solution'>Working Solution</option>
								</select>
							</div>
							<div className='flex flex-col gap-y-4 lg:col-span-2'>
								<label className='text-xl text-base font-light'>Additional Details</label>
								<textarea
									onChange={handleInput}
									className='border border-base rounded-md bg-white h-40 p-2'
									name=''
									id='projectDetails'></textarea>
							</div>

						</div>
							<div className='flex flex-col gap-y-4 lg:flex-row lg:justify-around'>
								<ButtonPrimary
									label='Previous'
									type='primary'
									dark={true}
									action={() => setFormStep("General Information")}
								/>
								<ButtonPrimary label='Submit' type='primary' dark={true} action={handleSubmit(onSubmit)} />
							</div>
					</div>
				)}

				{formStep === "Complete" && (
					<div>
						<p className='text-2xl text-center font-light'>
							Your inquiry has been sent. Our team will review it and be in touch shortly!
						</p>
					</div>
				)}
			</form>
			<Footer></Footer>
		</div>
	);
};

export default Contact;
