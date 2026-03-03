import React, { useContext } from "react";
import headerImg from "../assets/output-onlinepngtools.png";
import "../Styles/Auth.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthContext";

const AdminSignupPage = () => {
  const {
    registerUser,
    registeringUser,
    handlePassword,
    showPassword,
    handleConfirmPassword,
    showConfirmPassword,
  } = useContext(AuthContext);

  const registerSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    registerUser(data);
  };
  return (
    <div className="signup">
      <div className="admin-header">
        <span class="shape circle"></span>
        <span class="shape square"></span>
        <span class="shape rectangle"></span>
        <div>
          <img src={headerImg} alt="Headerimg" />
        </div>
        <div>
          <h6>Studio Management</h6>
          <h2>
            Where Beauty <span>Meets</span> Precision.
          </h2>
          <p>
            Manage your appointments, clients, and services from one elegant
            workspace.
          </p>
          <h5>Limadollz Beauty World</h5>
        </div>
      </div>
      <div className="admin-signup-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign Up</h2>
          <p>Fill in the details below to create your account.</p>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <strong className="error">{errors.email.message}</strong>
            )}
          </div>
          <div>
            <label htmlFor="">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password")}
              />
              <span onClick={handlePassword} className="password-icon">
                <i class={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}></i>
              </span>
            </div>
            {errors.password && (
              <strong className="error">{errors.password.message}</strong>
            )}
          </div>
          <div>
            <label htmlFor="">Confirm Password</label>
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                {...register("confirmPassword")}
              />
              <span onClick={handleConfirmPassword} className="password-icon">
                <i
                  class={showConfirmPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                ></i>
              </span>
            </div>
            {errors.confirmPassword && (
              <strong className="error">
                {errors.confirmPassword.message}
              </strong>
            )}
          </div>
          <div>
            <button type="submit">
              {registeringUser ? "Signing Up..." : "Sign Up"}{" "}
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div>
            <p>
              Already have an account? <a href="/admin-login">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignupPage;
