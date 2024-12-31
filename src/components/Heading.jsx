import React from 'react'

function Heading(data) {
    return (
    <div className={`flex flex-col gap-2 ${data.tsize}`}>
        <p className='font-bold'>{data.Heading}</p>
        <p className=' font-medium text-[14px] text-[#9e9fb3]'>{data.subHeading}</p>
    </div>
  )
}

export default Heading
