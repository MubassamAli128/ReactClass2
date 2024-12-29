import React, { useState } from "react";
import Button from "./Button"
const E4=()=>{

    const [items,setItems]=useState(['Apple','Banana','Orange']);
    const addItem=()=>{
        setItems([...items,'Grapes']);
    };

    return(
        <div>
            <ul>
                {
                    items.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <Button onClick={addItem}>Add Grapes</Button>
        </div>
    )
}

export default E4;