import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import LoginModel from "../models/auth/LoginModel";

const Login: React.FC = () => {

    const [loginModel, setLoginModel] = useState<LoginModel>({
        Username: '',
        Password: '',
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginModel({ ...loginModel, [e.target.name]: e.target.value });
    };

    return (
        <div className="">
            {/* Section: Design Block */}
            <section className="text-center">
                {/* Background image */}
                <div
                    className="p-5 bg-image"
                    style={{
                        backgroundImage:
                            'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
                        height: 250
                    }}
                />
                {/* Background image */}
                <div
                    className="card mx-4 mx-md-5 shadow-5-strong"
                    style={{
                        marginTop: "-100px",
                        background: "hsla(0, 0%, 100%, 0.8)",
                        backdropFilter: "blur(30px)"
                    }}
                >
                    <div className="card-body py-5 px-md-5">
                        {/* Pills navs */}
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link active" to={"/login"}>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" to={"/register"}>
                                    Register
                                </Link>
                            </li>
                        </ul>
                        {/* Pills navs */}
                        {/* Pills content */}
                        <div className="tab-content">
                            <div className="tab-pane fade show active">
                                <form>
                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="loginName" className="form-control"
                                            value={loginModel.Username}
                                            onChange={onChange} />
                                        <label className="form-label" htmlFor="loginName">
                                            Email or username
                                        </label>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="loginPassword" className="form-control"
                                            value={loginModel.Password}
                                            onChange={onChange} />
                                        <label className="form-label" htmlFor="loginPassword">
                                            Password
                                        </label>
                                    </div>
                                    {/* 2 column grid layout */}
                                    <div className="row mb-4">
                                        <div className="col-md-6 d-flex justify-content-center">
                                            {/* Checkbox */}
                                            <div className="form-check mb-3 mb-md-0">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="loginCheck"
                                                />
                                                <label className="form-check-label" htmlFor="loginCheck">
                                                    {" "}
                                                    Remember me{" "}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-center">
                                            {/* Simple link */}
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Sign in
                                    </button>
                                    {/* Register buttons */}
                                    <div className="text-center">
                                        <p>
                                            Not a member? <a href="#!">Register</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Pills content */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;