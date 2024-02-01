import React, {useState} from "react";
import {Outlet, Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Book from "./Book";
import EachPages from "./EachPages";
import Homepage from "./Homepage";

const SiteRoutes = () => {
    const location = useLocation();

    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element=<Homepage/> />
                <Route path="AnimeClub">
                    <Route index element=<Book/> />
                    {Array.from({ length: 20 }, (_, index) => (
                        <Route key={index} path={`Page${index}`} element={<EachPages page={index}/>} />
                    ))}
                </Route>
            </Routes>
        </AnimatePresence>
    )

}

export default SiteRoutes