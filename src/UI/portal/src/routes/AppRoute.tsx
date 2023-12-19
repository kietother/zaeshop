import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "../components/layout/Navbar";
import UserPage from "../pages/user/UserPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import LeftSideBar from "../components/layout/LeftSideBar";
import RightSideBar from "../components/layout/RightSideBar";
import Footer from "../components/layout/Footer";
import NotFoundPage from "../pages/NotFoundPage";
import { ToastContainer } from "react-toastify";
import RolePage from "../pages/user/RolePage";
import AlbumPage from "../pages/album/AlbumPage";
import AlbumDetailCollectionPage from "../pages/album/AlbumDetailCollectionPage";
import ContentItemPage from "../pages/album/ContentItemPage";

const AppRoute: React.FC = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="login" Component={LoginPage} />
            <Route path="register" Component={RegisterPage} />
            <Route path='*' Component={MainComponent} />
        </Routes>
        <ToastContainer />
    </BrowserRouter>
);

const MainComponent: React.FC = () => {
    return (
        <>
            <Navbar />
            <LeftSideBar />
            <RightSideBar />
            <Routes>
                <Route path="/" Component={UserPage} />;
                <Route path="/users" Component={UserPage} />;
                <Route path="/roles" Component={RolePage} />;
                <Route path="/albums" Component={AlbumPage} />;
                <Route path="/albums/:albumId" Component={AlbumDetailCollectionPage} />;
                <Route path="/collections/:collectionId" Component={ContentItemPage} />;
                <Route path="*" Component={NotFoundPage} />;
            </Routes>
            <Footer />
        </>
    );
}

export default AppRoute;