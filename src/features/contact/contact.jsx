import { useContext, useState } from "react";
import "./contact.css";
import TextField from "../../Components/text_input/textField";
import { Call, Sms, User } from "iconsax-react";
import FrequentAsked from "../../components/faq/FrequentAsked";
import { ThemeContext } from "../../App";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../../components/button/button";
const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });
  const { isDark } = useContext(ThemeContext);
  const icon_color = isDark ? "white" : "black";
  return (
    <>
      <div className="bg-green-v-1 pt-100 mt-50">
        <div className="contact-section-wrapper max-width mx-auto text-black-variant-1 px-2">
          <div
            className=" text-center text-md-start px-2 mt-0 mt-md-5 mx-auto text-white"
            style={{ maxWidth: "400px" }}
          >
            <h1 className=" mb-3" style={{ fontSize: "3rem" }}>
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
                consultation
              </p>
            </div>
          </div>
          <section className="contact-section  pb-100 mx-auto">
            <form
              action=""
              className=" shadow contact-form"
              onSubmit={handleSubmit()}
            >
              <h4 className="text-center">Register here</h4>
              <div className="form-container">
                <TextField
                  type={"text"}
                  prefix_icon={<User color={icon_color} />}
                  placeholder={"Your first name"}
                  name={"First Name"}
                  register={register("firstname", {
                    required: "First name is required",
                  })}
                  error={errors.firstname?.message}
                />
                <TextField
                  type={"text"}
                  prefix_icon={<User color={icon_color} />}
                  placeholder={"Your last name"}
                  name={"Last Name"}
                  register={register("lastname", {
                    required: "Last name is required",
                  })}
                  error={errors.lastname?.message}
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
              {/* <textarea
              name="message"
              className="w-100 transparent mt-4 p-2 rounded"
              placeholder="Write your message here"
              {...register("message", { required: "required field" })}
              rows={4}
            /> */}
              <div className="mt-2">
                <ButtonPrimary title={"Register"} type={"submit"} radius={6} />
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
