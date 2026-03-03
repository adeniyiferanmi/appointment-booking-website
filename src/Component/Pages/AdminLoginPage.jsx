import React, { useContext } from 'react'
import headerImg from "../assets/output-onlinepngtools.png";
import "../Styles/Auth.css";
import { AuthContext } from '../../Context/AuthContext';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


const AdminLoginPage = () => {
    const {handlePassword,showPassword,adminLogin,loginAdmin} = useContext(AuthContext)
    const authSchema = yup.object({
        email: yup.string().email("Invalid email format").required("Email is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      });

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(authSchema),
        defaultValues: {  
          email: "",
          password: "",
        },
      });
      const onSubmit = (data) => {
        adminLogin(data);
      }
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
            <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
              <h2>Sign In</h2>
              <p>Access your admin dashboard</p>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your email" required {...register("email")} />
                {errors.email && <strong className="error">{errors.email.message}</strong>}
              </div>
              <div>
                <label htmlFor="">Password</label>
                <div className='password-container'>
                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" required {...register("password")} />
                <span onClick={handlePassword} className='password-icon'>
                <i  class={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}></i>
                </span>
                </div>
                {errors.password && <strong className="error">{errors.password.message}</strong>}
                <div className='remember'>
                    <div>
                    <input type="checkbox" id="remember-me" required/>
                    <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <a href="#">Forgot password?</a>
                </div>
              </div>
              
              <div>
                <button type="submit">{loginAdmin ? "Signing In..." : "Sign In"} <i class="bi bi-arrow-right"></i></button>
              </div>
              <div className='atag'>
              <a href="/admin-signup">create new account</a>
              </div>
            </form>
          </div>
        </div>
  )

}

export default AdminLoginPage