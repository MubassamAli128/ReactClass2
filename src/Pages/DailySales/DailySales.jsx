import React from 'react'
import Products from '../../components/Products'
import TotalAvr from '../../components/TotalAvr'
import ChartBarExample from './Chart2'



function DailySales() {
    return (
        <div className='TabContent flex flex-col gap-5'>
            <Products />
            <div className='px-2 rounded-lg shadow-lg'>
                <TotalAvr/>
                <ChartBarExample/>
            </div>
        </div>
    )
}

export default DailySales