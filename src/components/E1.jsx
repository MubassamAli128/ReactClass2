import React, { useState } from "react";
import Button from "./Button"
const E1=()=>{
    const [num, setCount]=useState(0);
    const updateNumber=()=>{
        setCount(num+1)
    }

    return(
        <div>
            <Button countent={num} onClick={updateNumber}/>
        </div>
    )
}

export default E1;