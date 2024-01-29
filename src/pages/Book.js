import React, {useState} from 'react';
import TextBlock from "./TextBlock";
import EachPages from "./EachPages";
import {motion} from "framer-motion";

const Book = () =>{
    const [test, setTest] = useState(false);
    const [test2, setTest2] = useState(false);

    return (
        <div className="book">
            <div className="bookpage" style={{transform: test ? 'rotateY(180deg)' : 'rotateY(0deg)'}}>
                <motion.div layout className="pagebox" style={{transform: test ? 'rotateY(180deg)' : 'rotateY(0deg)', zIndex: 1}}
                            onClick={() => {
                                setTest(!test);
                                console.log("hi");
                            }}>
                    <div className="frontpage">
                        <EachPages page={2}/>
                    </div>
                    <div className="backpage">
                        <EachPages page={1}/>
                    </div>
                </motion.div>
            </div>
            <div className="bookpage">
                <motion.div layout className="pagebox" style={{transform: test2 ? 'rotateY(180deg)' : 'rotateY(0deg)', zIndex: 2}}
                            onClick={() => {
                                setTest2(!test2);
                                console.log("hi");
                            }}>
                    <div className="frontpage">
                        <img src="/ClubJournal/pic/iriya.png" style={{width: '182mm', height:'257mm'}}/>
                    </div>
                    <div className="backpage">
                        <EachPages page={1}/>
                    </div>
                </motion.div>
            </div>
        </div>

    );
}

export default Book;
