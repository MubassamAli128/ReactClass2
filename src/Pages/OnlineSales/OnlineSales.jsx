import React from 'react'
import Products from '../../components/Products'
import TotalAvr from '../../components/TotalAvr'
import ChartLineExample from './Chart1'



function OnlineSales() {
    return (
        <div className='TabContent flex flex-col gap-5'>
            <Products />
            <div className='px-2 rounded-lg shadow-lg'>
                <TotalAvr/>
                <ChartLineExample/>
            </div>
        </div>
    )
}

export default OnlineSales