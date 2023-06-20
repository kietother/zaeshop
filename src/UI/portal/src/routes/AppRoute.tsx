import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Welcome from "../components/welcome/Webcome";
import HelloPage from "../components/hello-page/HelloPage";

const AppRoute = () => (
    <HashRouter>
        <Routes>
            <Route path="/hello" Component={HelloPage} />
            <Route path="/" Component={Welcome} />
        </Routes>
    </HashRouter>
);

export default AppRoute;