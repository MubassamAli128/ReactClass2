import React from 'react'

function Button(data) {
    return (
        <>
            <button className={` ${data.bg} ${data.text}  w-full p-2 justify-center items-center rounded-md flex border border-gray-300`}>
                <div className='text-2xl absolute left-4'>
                  {data.children}
                </div>
                <div className='font-semibold'>
                    {data.value}
                </div>
            </button>
        </>
    )
}

export default Button
