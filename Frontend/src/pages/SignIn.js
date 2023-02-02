import {useFormik} from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'
import { loginUser } from './request/request';

export default function SignIn() {
  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('authToken')){
      navigate('/')
    }
  })

  const SignInSchema = Yup.object().shape({
    username: Yup.string(),
    password: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema:  SignInSchema ,
    onSubmit: (values) => {
      console.log(values);
      loginUser(values).then((response)=>{
        console.log(response)
        if(response.status === 200){
          localStorage.setItem("authToken", response.data.access);
          navigate("/");  
        }
      }).catch((error)=>{
        console.log(error.response.data)
      })
    },
  });

  return (
    <>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            { /* <!-- Title -->  */}
            <h1 className="display-4 text-white mb-4 position-relative"> </h1>
            { /* <!-- SVG START -->  */}
            {/* -------------- */}
            { /* <!-- SVG END -->  */}
          </div>
          <div className="col-sm-10 col-md-8 col-lg-6 position-relative z-index-1">
            { /* <!-- Sign in form START -->  */}
            <div className="card card-body p-4 p-sm-5 mt-sm-n5 mb-n5">
              { /* <!-- Title -->  */}
              <h2 className="h1 mb-2">Sign in</h2>
              <p>Don't have an account?<a href="sign-up"> Click here to sign up</a></p>
              { /* <!-- Form START -->  */}
              <form className="mt-4" onSubmit={formik.handleSubmit}>
                <div className="mb-3 position-relative input-group-lg">
                  <input {...formik.getFieldProps('username')} className="form-control" placeholder="Enter Username" 
                  />
                  {/* --------------------- email error --------------- */}
                  {formik.touched.email && formik.errors.username && (
                 <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.username}</div>
                    </div> 
                 )} 
                  {/* --------------------- email error --------------- */}
                </div>

                <div className="mb-3">
                  { /* <!-- Input group -->  */ }
                  <div className="input-group input-group-lg">
                  
                  
                    <input className="form-control fakepassword"  id="psw-input" placeholder="Enter new password" {...formik.getFieldProps('password')} />
                    <span className="input-group-text p-0">
                      <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                    </span>
                    
                  </div>
                  {/* ----------------- password  error ----------------- */}
                  {formik.touched.password && formik.errors.password && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.password}</div>
                      </div>
                    )} 
                    {/* ----------------- password error ----------------- */}
                  { /* <!-- Pswmeter -->  */ }
                  <div id="pswmeter" className="mt-2"></div>
                    <div className="d-flex mt-1">
                      <div id="pswmeter-message" className="rounded"></div>
                      { /* <!-- Password message notification -->  */ }
                        <div className="ms-auto">
                          <i className="bi bi-info-circle ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long." data-bs-original-title="" title=""></i>
                        </div>
                    </div>
                  </div>
                <div className="mb-3 d-sm-flex justify-content-between">
                  <div>
                    <input type="checkbox" className="form-check-input" id="rememberCheck" />
                    <label className="form-check-label" htmlFor="rememberCheck"> &nbsp; Remember me?</label>
                  </div>
                  <a href="forgot-password.html">Forgot password?</a>
                </div>
                { /* <!-- Button -->  */ }
                <div className="d-grid">
                  <button type="submit"  className="btn btn-lg btn-primary-soft">Login</button>
                </div>
                { /* <!-- Copyright -->  */ }
                <p className="mb-0 mt-3">©2022 <a target="_blank" href="https://www.webestica.com/" rel="noreferrer">Webestica.</a> All rights reserved</p>
              </form>

              { /* <!-- Form END -->  */}
            </div>
            { /* <!-- Sign in form START -->  */}
          </div>
        </div> { /* <!-- Row END -->  */}
      </div>
    </>
  )
}
