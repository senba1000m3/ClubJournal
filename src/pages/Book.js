import React, {useEffect, useRef, useState} from 'react';
import TextBlock from "./TextBlock";
import EachPages from "./EachPages";
import {motion} from "framer-motion";
import {Route} from "react-router-dom";

const FlipPage = ({pageIndex, front, back, nowPage, setNowPage}) => {

    return (
        <motion.div layout className="pagebox"
                    style={{
                        transform: nowPage[pageIndex] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        zIndex: nowPage[pageIndex] ? pageIndex ** pageIndex : pageIndex * (-1)
                    }}
                    onClick={() => {
                        setNowPage((prevNowPage) => {
                            const newNowPage = [...prevNowPage];
                            newNowPage[pageIndex] = !nowPage[pageIndex];
                            return newNowPage;
                        });
                    }}>
            <div className="frontpage">
                {front}
            </div>
            <div className="backpage">
                {back}
            </div>
        </motion.div>
    );
}
const Book = () => {
    const [nowPage, setNowPage] = useState([false]);

    return (
        <div className="book">
            <div className="bookpage" style={{marginLeft: nowPage[1] ? '-800px':'0px'}}>
                <FlipPage pageIndex={1}
                          front={<img src="/ClubJournal/pic/iriya.png" style={{width: '182mm', height: '257mm'}}/>}
                          back={<EachPages page={1}/>}
                          nowPage={nowPage} setNowPage={setNowPage}
                />
                {Array.from({ length: 5 }, (_, index) => (
                    <FlipPage key = {index} pageIndex={index+2}
                              front={<EachPages page={2}/>}
                              back={<EachPages page={1}/>}
                              nowPage={nowPage} setNowPage={setNowPage}
                    />
                ))}
                <FlipPage pageIndex={7}
                          front={<EachPages page={2}/>}
                          back={<div style={{width: '182mm', height: '257mm', backgroundColor: "white", display: "flex", justifyContent: "center"}}>
                              <a style={{position: "absolute", bottom: '12px', fontSize: '24px'}}>© 2024 Senba</a>
                          </div>}
                          nowPage={nowPage} setNowPage={setNowPage}
                />
            </div>
        </div>

    );
}

export default Book;
