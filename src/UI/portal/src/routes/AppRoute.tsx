import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "../components/layout/Navbar";
import UserPage from "../pages/UserPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import LeftSideBar from "../components/layout/LeftSideBar";
import RightSideBar from "../components/layout/RightSideBar";
import Footer from "../components/layout/Footer";

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
            <LeftSideBar />
            <RightSideBar />
            <Routes>
                <Route path="/users" Component={UserPage} />;
            </Routes>
            <Footer />
        </>
    );
}

export default AppRoute;