import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from "../components/welcome/Webcome";
import HelloPage from "../components/hello-page/HelloPage";

const AppRoute = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/hello" Component={HelloPage} />
            <Route path="/" Component={Welcome} />
        </Routes>
    </BrowserRouter>
);

export default AppRoute;