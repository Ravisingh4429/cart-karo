import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./SignupPage.css";
import { useState } from "react";
import user from "../../assets/user.webp";
import { Signup } from "../../services/userService";

const SignupPage = () => {
  const [profile, setProfile] = useState(null);
  const [formerror, setFormError] = useState("");
  const schema = z
    .object({
      name: z.string().min(3, "Name should be at least 3 characters."),
      email: z.email("Please enter valid email"),
      password: z.string().min(8, "Password must be at least 8 characters."),
      cpassword: z.string(),
      address: z.string().min(15, "Address must be at least 15 characters."),
    })
    .refine((data) => data.password === data.cpassword, {
      message: "Confirm Password does not match Password",
      path: ["cpassword"],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onsubmit = async (data) => {
    try {
      await Signup(data, profile);
    } catch (error) {
      setFormError(error.response.data.message);
    }
  };

  return (
    <section className="form_page">
      <form
        className="authentication_form signup_form"
        onSubmit={handleSubmit(onsubmit)}
      >
        <h2>SignUp Form</h2>

        <div className="image_input_section">
          <div className="image_preview">
            <img
              src={profile ? URL.createObjectURL(profile) : user}
              id="file-ip-1-preview"
            />
          </div>
          <label htmlFor="file-ip-1" className="image_label">
            Upload Image
          </label>
          <input
            type="file"
            onChange={(e) => setProfile(e.target.files[0])}
            id="file-ip-1"
            className="image_input"
          />
        </div>

        {/* Form Inputs */}
        <div className="signup_form_input">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              {...register("name")}
              className="form_text_input"
              type="text"
              placeholder="Enter your name"
            />
            {errors.name && <em>{errors.name.message}</em>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form_text_input"
              type="email"
              {...register("email")}
              placeholder="Enter your email address"
            />
            {errors.email && <em>{errors.email.message}</em>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form_text_input"
              type="password"
              {...register("password")}
              placeholder="Enter your password"
            />
            {errors.password && <em>{errors.password.message}</em>}
          </div>

          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              id="cpassword"
              className="form_text_input"
              type="password"
              {...register("cpassword")}
              placeholder="Enter confirm password"
            />
            {errors.cpassword && <em>{errors.cpassword.message}</em>}
          </div>

          <div className="signup_textares_section">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              {...register("address")}
              className="input_textarea"
              placeholder="Enter delivery address"
            />
            {errors.address && <em>{errors.address.message}</em>}
          </div>
        </div>
        {formerror && <em>{formerror}</em>}
        <button className="form_submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignupPage;
