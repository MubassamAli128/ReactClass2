import React from "react";
import OnlineSales from "../Pages/OnlineSales/OnlineSales";


const Tabs=({onTabClick})=>{

    // console.log({onTabClick});
    const tabs=[
        {id:"NewUser",text:"New User"},
        {id:"OnlineSales",text:"Online Sales"},
        {id:"DailySales",text:"Daily Sales"}
    ]

    return(
        tabs.map((tab, index)=>(
            <button key={index} id={tab.id}  onClick={() => onTabClick(tab.id)} className="hover:bg-white rounded-full px-2 focus:bg-white">{tab.text}</button>
        ))
    )
}
export default Tabs;