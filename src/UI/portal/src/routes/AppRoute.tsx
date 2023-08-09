import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from "../components/welcome/Webcome";
import HelloPage from "../components/hello-page/HelloPage";
import Navbar from "../components/layout/Navbar";
import UserPage from "../pages/UserPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const AppRoute: React.FC = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="login" Component={LoginPage} />
            <Route path="register" Component={RegisterPage} />
            <Route path='*' Component={MainComponent} />
        </Routes>
    </BrowserRouter>
);

const MainComponent: React.FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/users" Component={UserPage} />;
                <Route path="/hello" Component={HelloPage} />
                <Route path="/" Component={Welcome} />
            </Routes>
        </>
    );
}

export default AppRoute;