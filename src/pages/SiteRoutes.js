import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import EachPages from "./EachPages";
import Homepage from "./Homepage";
import Book from "./Book";

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