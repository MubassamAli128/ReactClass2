import React, { useState } from "react";
import Button from "./Button"
const E3=()=>{
    const [user, setUser]=useState({
        name:'Mubassam Ali',
        age:28
    });
    const updateUser=()=>{
        setUser({...user,age:29});
    }

    return(
        <div>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <Button onClick={updateUser}>Icrease Age</Button>
        </div>
    )
}

export default E3;