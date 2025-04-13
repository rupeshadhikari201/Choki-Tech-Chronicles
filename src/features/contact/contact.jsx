import { useContext, useState } from "react";
import "./contact.css";
import TextField from "../../Components/text_input/textField";
import { Call, Sms, User } from "iconsax-react";
import FrequentAsked from "../../components/faq/FrequentAsked";
import { ThemeContext } from "../../App";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../../components/button/button";
import axios from "axios";
import { base_url } from "../../utils/constants/path";
import Swal from "sweetalert2";

const ContactUs = () => {
	const { isDark } = useContext(ThemeContext);
	const icon_color = isDark ? "white" : "black";

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		defaultValues: {
			fullname: "",
			email: "",
			message: "",
		},
	});

	const myHandleSubmit = async data => {
		console.log(data);
		try {
			const response = await axios.post(
				`${base_url}api/feedbacks/feedback/`,
				data
			);

			console.log("Success response:", response.data);

			Swal.fire({
				icon: "success",
				title: "Feedback Sent!",
				text:
					response.data.message ||
					"Your feedback has been submitted successfully.", // Use backend message or default
			});

			reset(); // Reset the form fields on success
		} catch (error) {
			console.error("Submission error:", error.response?.data || error.message);
			let errMsg = "Something went wrong. Please try again."; // Default error
			if (error.response && error.response.data) {
				// Try to get a more specific error message from backend
				// Adjust this based on your actual backend error response structure
				errMsg =
					error.response.data.message || // General message key
					error.response.data.errors?.email?.[0] || // Specific email error
					error.response.data.errors?.fullname?.[0] || // Specific fullname error
					error.response.data.errors?.message?.[0] || // Specific message error
					"Failed to submit feedback due to a server error."; // Fallback server error
			} else if (error.request) {
				errMsg =
					"No response received from server. Please check your network connection.";
			} else {
				errMsg = error.message; // Other errors (e.g., setup issues)
			}

			Swal.fire({
				icon: "error", // Corrected icon for errors
				title: "Submission Failed", // Changed title
				text: errMsg,
			});
		}
	};

	return (
		<>
			<div className="bg-green-v-1 pt-100 mt-50">
				<div className="contact-section-wrapper max-width mx-auto text-black-variant-1 px-2">
					<div
						className=" text-center text-md-start px-2 mt-0 mt-md-5 mx-auto text-white"
						style={{ maxWidth: "400px" }}
					>
						<h1
							className=" mb-3"
							style={{ fontSize: "3rem" }}
						>
							Connect with GIT Maximizing Potential
						</h1>
						<h6 className="font-weight-400">
							Whether you're looking for innovative tech solutions, expert
							advice, or support with your current projects, our team is here to
							assist you.
						</h6>
						<div className="d-flex gap-4 justify-content-center justify-content-md-start">
							<p
								className="border px-3 py-1 my-3"
								style={{ borderRadius: "30px" }}
							>
								Customer support
							</p>{" "}
							<p
								className="border px-3 py-1 my-3"
								style={{ borderRadius: "30px" }}
							>
								Consultation
							</p>
						</div>
					</div>

					{/* Feedback */}
					<section className="contact-section  pb-100 mx-auto">
						<form
							action=""
							className=" shadow contact-form"
							onSubmit={handleSubmit(myHandleSubmit)}
						>
							<h4 className="text-center">Feedback</h4>
							<div className="form-container">
								<TextField
									type={"text"}
									prefix_icon={<User color={icon_color} />}
									placeholder={"Enter Your Fullname"}
									name={"Full Name"}
									register={register("fullname", {
										required: "Fullname is required",
									})}
									error={errors.firstname?.message}
								/>
								<TextField
									type={"email"}
									prefix_icon={<Sms color={icon_color} />}
									placeholder={"Your email address"}
									name={"Email"}
									register={register("email", {
										required: "Email is required",
									})}
									error={errors.email?.message}
								/>
							</div>
							<textarea
								name="message"
								className="w-100 transparent mt-4 p-2 rounded"
								placeholder="Write your message here"
								{...register("message", { required: "required field" })}
								rows={4}
							/>
							<div className="mt-2">
								<ButtonPrimary
									title={"Submit"}
									type={"submit"}
									radius={6}
								/>
							</div>
						</form>
					</section>
				</div>
			</div>
			<FrequentAsked />
		</>
	);
};

export default ContactUs;
