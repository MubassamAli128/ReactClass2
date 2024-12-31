import React from 'react'

function Input(data) {
  return (
    <div>
      <input value={data.value} type={data.type} className='bg-white text-gray-400 pl-4 w-full p-2 justify-center items-center rounded-md flex border border-gray-300'/>
    </div>
  )
}

export default Input
