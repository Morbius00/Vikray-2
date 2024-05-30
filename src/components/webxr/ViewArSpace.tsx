import React from 'react'
import { ArIcon2 } from './assets'

const ViewArSpace = () => {
  return (
    <button className='text-white mt-[50vh] mx-[27vw] flex backdrop-blur-lg justify-center w-[12rem] items-center space-x-3 border border-white p-2 rounded-full hover:bg-[#ffffff2c]' slot="ar-button" id="ar-button">
    <div id="ar-prompt">
        <ArIcon2 />
    </div>
    <div className='text-sm'>
        View in your space
    </div>
</button>
  )
}

export default ViewArSpace