import React, {useState} from "react";

const TextBlock = ({title="", text="", text2="", img="", mode=1}) => {
    let content;

    switch (mode) {
        case 1:
            content = (
                <div>
                    <div className="vertical" style={{float: 'right', writingMode: 'vertical-rl'}}>
                        <div className="subtitle">{title}</div>
                        {title!=="" && <div className="titleline"/>}
                        <div className="text">{text}</div>
                        <div className="text">{text2}</div>
                    </div>

                    <img src={img} className="sidepic" style={{float: 'left'}}/>
                </div>
            );
            break;

        case 2:
            content = (
                <div>
                    <img src={img} className="sidepic" style={{float: 'right'}}/>

                    <div className="vertical" style={{float: 'left', writingMode: 'vertical-lr'}}>
                        <div className="subtitle">{title}</div>
                        {title!=="" && <div className="titleline"/>}
                        <div className="text">{text}</div>
                        <div className="text">{text2}</div>
                    </div>
                </div>
            );
            break;
    };

    return (
        <div className="block">
            {content}
        </div>
    );
}

export default TextBlock;