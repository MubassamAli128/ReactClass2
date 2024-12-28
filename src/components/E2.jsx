import React, { useState } from "react";
import Button from "./Button"
const E2=()=>{
    const [name, setName]=useState("Mubassam");
    const updateName=()=>{
        setName("Mubassam Ali");
    }

    return(
        <div>
            <p>Name : {name}</p>
            <Button onClick={updateName}>Change Name</Button>
        </div>
    )
}

export default E2;