import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./LoginPage.css";
import apiClient from "../../utils/api-client";
const schema = z.object({
  email: z.email({ message: "Please Enter Your Email" }).min(3),
  password: z.string().min(8, {
    message: "Please Enter your Password must be 8 character or more",
  }),
});
const Login = () => {
  const [formerror, setFormerror] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onsubmit = async (data) => {
    try {
      const res = await apiClient.post("/user/login", {
        email: data.email,
        password: data.password,
      });
      // console.log(res.data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      setFormerror(error.response.data.message);
    }
  };

  return (
    <section className="form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onsubmit)}>
        <h2>Login Form</h2>
        <div className="form_input">
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter Your Email"
              id="email"
            />
          </div>
          {errors.email && (
            <em className="error_message">{errors.email.message}</em>
          )}

          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter Your Password"
              id="password"
            />
          </div>
          {formerror && <em>{formerror}</em>}
          {errors.password && (
            <em className="error_message">{errors.password.message} </em>
          )}

          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
