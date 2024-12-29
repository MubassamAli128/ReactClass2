import React from 'react'
import { IoAnalyticsSharp } from "react-icons/io5";
import './index.css';
import Tabs from './components/Tabs';
import NewUser from './Pages/NewUser/NewUser';
import Footer from './components/footer';
import OnlineSales from './Pages/OnlineSales/OnlineSales'
import DailySales from './Pages/DailySales/DailySales';


function App() {
  let page = null;
  const switchTab = (tabID) => {
    page = tabID;
    console.log("Hello1  --->  " + tabID);
    CheckPoint();
  };

  let CheckPoint=()=>{
    let container=document.getElementById("tab-content");
    if (page === "NewUser"){
      container.innerHTML="";
      container.innerHTML=<NewUser />

      // return <NewUser />;
    }
    else if (page === "OnlineSales"){
      console.log("Hello2");
      container.innerHTML="";
      container.innerHTML=<OnlineSales />
      // return <OnlineSales />;
    }
    else if (page === "DailySales"){
      container.innerHTML="";
      container.innerHTML=<DailySales />
      // return <DailySales />;
    }
    else{
      container.innerHTML="";
      container.innerHTML=<NewUser />
      // return <NewUser />;  
    }
  }
  

  return(
    <>
    <div className='flex items-center justify-center h-screen bg-gray-500 w-full'>
      <div className='bg-white rounded-xl p-4 w-[30%] flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <IoAnalyticsSharp className='border border-white'/>
          <p>Performence</p>
        </div>
        <div className='bg-gray-400 rounded-full w-full p-2 flex items-center justify-between'>
          <Tabs onTabClick={switchTab}/>
        </div>
        <div id='tab-content'>
          <NewUser />
          {/* {let a=CheckPoint()} */}
          {/* <CheckPoint/> */}
        </div>
        <Footer Btext="Icrease 25%" text=" more email marketing to reach your user acquisition target to reach your monthly target."/>
      </div>
    </div>
    </>
  )
}

export default App
