import React from "react";
import {useNavigate} from "react-router-dom";
import {viewBook, viewHomepage} from "./AnimationSet";
import {motion} from "framer-motion";

const Homepage = () =>{
    const navigate = useNavigate();
    const aduio = new Audio("/ClubJournal/sound/choosebook.mp3")

    return(
        <motion.div variants={viewHomepage} initial="initial" animate="animate" exit="exit">
            <div className="bookshelf">
                <img src="/ClubJournal/pic/shelf.png" style={{width: '1000px', position: "relative"}} />
                <div style={{width: '1000px', height: '780px', position: "absolute"}}>
                    <img src="/ClubJournal/pic/frontcover.png" style={{top: '80px', left: '150px'}} className="books"
                         onClick={() =>{navigate('/AnimeClub'); aduio.play();}}/>
                    <div className="text" style={{top: '375px', left: '150px'}}>交大動畫社社刊</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Homepage;