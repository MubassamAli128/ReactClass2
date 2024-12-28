import React from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Products() {
    return (
        <div className='flex items-center justify-between w-full p-2 rounded-xl shadow-lg'>
            <div>
                <p className='text-gray-400'>DIGITAL PRODUCT</p>
                <div className='flex items-center gap-4'>
                    <FaArrowDown className='text-orange-400'/>
                    <p className='text-2xl font-semibold'>8,490</p>
                </div>
            </div>
            <div>
                <p className='text-gray-400'>PHYSICAL PRODUCT</p>
                <div className='flex items-center gap-4'>
                    <FaArrowUp className='text-green-400'/>
                    <p className='text-2xl font-semibold'>8,490</p>
                </div>
            </div>
        </div>
    )
}

export default Products