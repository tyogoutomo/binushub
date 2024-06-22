// import { Fragment } from "react";
// import { MouseEvent } from "react";

import React from "react";
import { useState } from "react";

interface ListGroupProps{
    items: string[];
    heading: string;

    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    // let items = [
    //     'Bandung',
    //     'Jakarta',
    //     'Banyuwangi',
    //     'Palembang',
    //     'Fakfak'
    // ];
    // let selectedIndex = -1;
    // Hook -> allows to tap into react's built-in features
    const [selectedIndex, setSelectedIndex] = useState(-1); // it needs variable(selectedIndex) & updater function


    // Event Handler
    // const handleClick = (event: MouseEvent) => console.log(event); //(event: MouseEvent) type annotation
    // items = [];

    // logic inside a constant
    const message = items.length === 0 ? <p>No item!</p> : null;
    // logic inside a func
    const getMessage = () => {
        return items.length === 0 ? <p>No item!</p> : null;
    }
    // traditional if
    // if (items.length  === 0)
    //     return <><h1>List</h1><p>No item!</p></>;
    
    return (
        // <div>
        // <Fragment>
        <>
            <h1>{heading}</h1>
            {/* { getMessage() } */}

            {/* if condition true the result will be the paragraph (&& element) */}
            { items.length === 0 && <p>No item!</p> }
            
            <ul className="list-group">
                {/* //untuk looping print items */}
                {items.map((item, index) => (
                    <li 
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item} 
                        // onClick={(event) => console.log("Clicked! "+item+" "+index)} 
                        // onClick={handleClick}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }} //state!!
                    >
                        {item}
                    </li>
                ))} 
            </ul>
        {/* </div> */}
        {/* </Fragment> */}
        </>
    )
}

export default ListGroup;