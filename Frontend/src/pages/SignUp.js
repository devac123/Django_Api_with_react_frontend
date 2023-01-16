import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { createuser } from "./request/request";

export default function SignUp() {
  const requiredErr = 'Somthing went wrong'
  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .required(requiredErr),
      password: Yup.string().min(8).required(requiredErr),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password Match: No")
        .required(requiredErr),
      firstname: Yup.string().min(4).required(requiredErr),
      age: Yup.number().max(99).required(requiredErr),
      lastname: Yup.string().min(4)
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      age: "",
      lastname:""
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      createuser(values).then((res) => {
        console.log("res-----------------", res);
      });
    },
  });

  return (
    <>
      {/* <!-- Container START --> */}
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100 py-5">
          {/* <!-- Main content START --> */}
          <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            {/* <!-- Sign up START --> */}
            <div className="card card-body rounded-3 p-4 p-sm-5">
              <div className="text-center">
                {/* <!-- Title --> */}
                <h1 className="mb-2">Sign up</h1>
                <span className="d-block">
                  Already have an account?{" "}
                  <a href="sign-in.html">Sign in here</a>
                </span>
              </div>
              {/* <!-- Form START --> */}
              <form className="mt-4" onSubmit={formik.handleSubmit}>
                {/* <!-- Email --> */}
                <div className="mb-3 input-group-lg">
                  <input
                    {...formik.getFieldProps("firstname")}
                    className="form-control"
                    placeholder="Enter Firstname"
                  />
                  {/* --------------------- firstname error --------------- */}
                  {formik.touched.firstname && formik.errors.firstname && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {formik.errors.firstname}
                      </div>
                    </div>
                  )}
                  {/* --------------------- firstname error --------------- */}
                </div>

                <div className="mb-3 input-group-lg">
                  <input
                    {...formik.getFieldProps("lastname")}
                    className="form-control"
                    placeholder="Enter lastname"
                  />
                  {/* --------------------- firstname error --------------- */}
                  {formik.touched.lastname && formik.errors.lastname && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {formik.errors.lastname}
                      </div>
                    </div>
                  )}
                  {/* --------------------- firstname error --------------- */}
                </div>

                <div className="mb-3 input-group-lg">
                  <input
                    {...formik.getFieldProps("email")}
                    className="form-control"
                    placeholder="Enter email"
                  />
                  <small>We'll never share your email with anyone else.</small>
                  {/* --------------------- email error --------------- */}
                  {formik.touched.email && formik.errors.email && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">{formik.errors.email}</div>
                    </div>
                  )}
                  {/* --------------------- email error --------------- */}
                </div>

                <div className="mb-3 input-group-lg">
                  <input
                    {...formik.getFieldProps("age")}
                    className="form-control"
                    placeholder="Enter Age"
                  />
                  {/* --------------------- firstname error --------------- */}
                  {formik.touched.age && formik.errors.age && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {formik.errors.age}
                      </div>
                    </div>
                  )}
                  {/* --------------------- firstname error --------------- */}
                </div>

                {/* <!-- New password --> */}
                <div className="mb-3 position-relative">
                  {/* <!-- Input group --> */}
                  <div className="input-group input-group-lg">
                    <input
                      {...formik.getFieldProps("password")}
                      className="form-control fakepassword"
                      id="psw-input"
                      placeholder="Enter new password"
                    />
                    <span className="input-group-text p-0">
                      <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                    </span>
                  </div>
                  {/* ----------------- password  error ----------------- */}
                  {formik.touched.password && formik.errors.password && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        {formik.errors.password}
                      </div>
                    </div>
                  )}
                  {/* ----------------- password error ----------------- */}
                  {/* <!-- Pswmeter --> */}
                  <div id="pswmeter" className="mt-2"></div>
                  <div className="d-flex mt-1">
                    <div id="pswmeter-message" className="rounded"></div>
                    {/* <!-- Password message notification --> */}
                    <div className="ms-auto">
                      <i
                        className="bi bi-info-circle ps-1"
                        data-bs-container="body"
                        data-bs-toggle="popover"
                        data-bs-placement="top"
                        data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long."
                        data-bs-original-title=""
                        title=""
                      ></i>
                    </div>
                  </div>
                </div>
                {/* <!-- Confirm password --> */}
                <div className="mb-3 input-group-lg">
                  <input
                    className="form-control"
                    {...formik.getFieldProps("confirmPassword")}
                    placeholder="Confirm password"
                  />
                </div>
                {/* ----------------- confirm password  error ----------------- */}
                {formik.touched.password && formik.errors.password && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      {formik.errors.confirmPassword}
                    </div>
                  </div>
                )}
                {/* ----------------- confirm password error ----------------- */}
                {/* <!-- Keep me signed in --> */}
                <div className="mb-3 text-start">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="keepsingnedCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="keepsingnedCheck"
                  >
                    {" "}
                    Keep me signed in
                  </label>
                </div>
                {/* <!-- Button --> */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-lg btn-primary">
                    Sign me up
                  </button>
                </div>
                {/* <!-- Copyright --> */}
                <p className="mb-0 mt-3 text-center">
                  ©2022{" "}
                  <a target="_blank" href="https://www.webestica.com/">
                    Webestica.
                  </a>{" "}
                  All rights reserved
                </p>
              </form>
              {/* <!-- Form END --> */}
            </div>
            {/* <!-- Sign up END --> */}
          </div>
        </div>{" "}
        {/* <!-- Row END --> */}
      </div>
      {/* <!-- Container END --> */}
    </>
  );
}
