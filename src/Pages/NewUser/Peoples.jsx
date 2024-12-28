import React from "react";
import image from '../../images/Profile.jpg';
import image2 from '../../images/Profile.jpg';
import image3 from '../../images/Profile.jpg';

const Peoples=()=>{

    const Peoples=[
        {
            img:image,
            position:"left-0"
        },
        {
            img:image2,
            position:"left-3"
        },
        {
            img:image3,
            position:"left-6"
        },
        {
            img:image2,
            position:"left-9"
        }
    ]


    return(
        Peoples.map((Img,index)=>(
            <img key={index} src={Img.img} className={`absolute top-0 ${Img.position}  w-8 h-8 rounded-full border border-white`} alt="" />
        ))
    )
}



export default Peoples;