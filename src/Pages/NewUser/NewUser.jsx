import React from "react";
import profile from '../../images/profile.jpg'
import TotalAvr from '../../components/TotalAvr';
import Peoples from './Peoples';
import { FaArrowRight } from "react-icons/fa6";

let NewUser=()=>{
    return(
        <div className="TabContent rounded-xl bg-gray-200 p-3 flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <img src={profile} className="w-24 h-24 rounded-full" alt="Profile" />
                <div>
                    <p className="text-gray-400 text-xs">TOP USER</p>
                    <p className="text-xl font-semibold">Gillian P.</p>
                    <p className="text-gray-400 text-xs">DAILY PURCHASE</p>
                    <p className="text-xl font-semibold">10 items</p>
                </div>
            </div>
            <hr className="w-full border border-gray-400"/>
            <TotalAvr/>
            <div className="relative w-full mb-2 flex items-center justify-between">
                <div>
                <Peoples/>
                </div>
                <div className="flex items-center gap-2 bg-gray-300 rounded-full px-3">
                    <span className="font-semibold">View All</span>
                    <FaArrowRight/>
                </div>
            </div>
        </div>
    )
}

export default NewUser;