import React, {useState} from 'react';
import EachPages from "./EachPages";
import {motion} from "framer-motion";
import {returnCover, viewBook} from "./AnimationSet";

const FlipPage = ({pageIndex, front, back, nowPage, setNowPage}) => {
    const flipaudio = new Audio('/ClubJournal/sound/flip.mp3');

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

                        flipaudio.play();
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
    const flipaudio = new Audio('/ClubJournal/sound/flip.mp3');
    const [nowPage, setNowPage] = useState([false]);

    return (
        <motion.div variants={viewBook} initial="initial" animate="animate" exit="exit" className="book">
            <div className="bookpage" style={{marginLeft: nowPage[1] ? '-800px' : '0px'}}>
                <FlipPage pageIndex={1}
                          front={<img src="/ClubJournal/pic/frontcover.png" alt="" style={{width: '182mm', height: '257mm'}}/>}
                          back={<EachPages page={0}/>}
                          nowPage={nowPage} setNowPage={setNowPage}
                />
                <FlipPage pageIndex={2}
                          front={<img src="/ClubJournal/pic/nijigakugo/poster.png" alt="" style={{width: '182mm', height: '257mm'}}/>}
                          back={<EachPages page={3}/>}
                          nowPage={nowPage} setNowPage={setNowPage}
                />
                <FlipPage pageIndex={3}
                          front={<EachPages page={4}/>}
                          back={<EachPages page={1}/>}
                          nowPage={nowPage} setNowPage={setNowPage}
                />
                <FlipPage pageIndex={4}
                          front={<EachPages page={2}/>}
                          back={<img src="/ClubJournal/pic/backcover.png" alt="" style={{width: '182mm', height: '257mm'}}/>}
                          nowPage={nowPage} setNowPage={setNowPage}
                />
                {Array.from({length: 0}, (_, index) => (
                    <FlipPage key={index} pageIndex={index + 4}
                              front={<EachPages page={4}/>}
                              back={<EachPages page={3}/>}
                              nowPage={nowPage} setNowPage={setNowPage}
                    />
                ))}
                {nowPage[4] === true && <motion.button variants={returnCover} onClick={() =>{
                    setNowPage([false]);flipaudio.play();}}>回到封面</motion.button>}
            </div>
        </motion.div>

    );
}

export default Book;

/*<div style={{width: '182mm', height: '257mm', backgroundColor: "white", display: "flex", justifyContent: "center"}}>
    <a style={{position: "absolute", bottom: '12px', fontSize: '24px'}}>© 2024 Senba</a>
</div>*/