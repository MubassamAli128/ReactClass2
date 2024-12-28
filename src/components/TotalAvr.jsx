import React from "react";
import { FaArrowUp } from "react-icons/fa6";


const TotalAvr=()=>{
    return(
        <div className="flex items-start justify-between w-full">
            <div>
                <p className="text-xs text-gray-400">TOTAL NEW USERS</p>
                <p className="text-[45px] font-bold">5,9k</p>
            </div>
            <div className="flex items-center text-green-400">
                <FaArrowUp/>
                <p>8,20%</p>
            </div>
        </div>
    )
}


export default TotalAvr;