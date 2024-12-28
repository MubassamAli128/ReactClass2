import React from "react";


let Footer=(data)=>{
    return(
        <div className="flex items-center text-xs text-center">
            <p className="font-bold">{data.Btext}
                <span className="font-normal">{data.text}</span>
            </p>
        </div>
    )
}


export default Footer;