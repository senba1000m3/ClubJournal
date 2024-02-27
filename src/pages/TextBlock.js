import React from "react";

const TextBlock = ({title="", text=[""], img="", mode=1, mark=0, size="140px",height="154px"}) => {
    let content;

    const DecideMark = ({value}) =>{
        switch (mark){
            case 1:
                return <div><span style={{color: "transparent"}}>留白</span>{value}</div>;
            case 2:
                return <div>•{value}</div>;
            default:
                return<div>{value}</div>
        }
    }

    switch (mode) {
        case 1:
            content = (
                <div>
                    <div className="vertical" style={{float: 'right', writingMode: 'vertical-rl'}}>
                        <div className="subtitle" style={{height: height}}>{title}</div>
                        {title && <div className="titleline"/>}
                        {text.map((value, index) => (
                            <div key={index} className="text" style={{height: height}}>
                                <DecideMark value={value} />
                            </div>
                        ))}
                    </div>

                    {img && <img src={img} alt="" className="sidepic" style={{float: 'left', height: size}}/>}
                </div>
            );
            break;

        case 2:
            content = (
                <div>
                    {img && <img src={img} alt="" className="sidepic" style={{float: 'right', height: size}}/>}

                    <div className="vertical" style={{float: "left", writingMode: 'vertical-lr'}}>
                        <div className="subtitle" style={{height: height}}>{title}</div>
                        {title && <div className="titleline"/>}
                        {text.map((value, index) => (
                            <div key={index} className="text" style={{height: height}}>
                                <DecideMark value={value} />
                            </div>
                        ))}
                    </div>
                </div>
            );
            break;
        default:
            break;
    };

    return (
        <div className="block" style={{height: height}}>
            {content}
        </div>
    );
}

export default TextBlock;