import React from 'react'

const CardCount = ({title, count}) => {
  return (
    <div className='border bg-white rounded-lg w-full md:w-60'>
        <div className='border-b p-4 h-16 md:h-10 flex items-center justify-between bg-[#2D0002] rounded-t-lg'>
            <h1 className='font-medium text-[16px] text-white'>{title}</h1>
            <span className='text-[12px] bg-orange-900 text-white px-1 rounded-md'> Total </span>
        </div>
        <div className='p-4 text-3xl'>
            {count}
        </div>
    </div>
  )
}

export default CardCount