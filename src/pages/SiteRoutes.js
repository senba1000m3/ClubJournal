import React, {useState} from "react";
import {Outlet, Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Book from "./Book";
import EachPages from "./EachPages";

const SiteRoutes = () => {
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element=<Book/> />
                {Array.from({ length: 20 }, (_, index) => (
                    <Route key={index} path={`/Page${index}`} element={<EachPages page={index}/>} />
                ))}
            </Routes>
        </AnimatePresence>
    )

}

export default SiteRoutes