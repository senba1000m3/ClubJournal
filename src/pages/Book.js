import React from 'react';
import TextBlock from "./TextBlock";
import EachPages from "./EachPages";

const Book = () =>{

    return(
        <div className="book">
            <div className="bookpage">
                <EachPages page={2}/>
                <EachPages page={1}/>
            </div>
        </div>
    );
}

export default Book;
