import React from 'react'

export default function Coin({image, text, label}) {
  return (
    <div className='border border-gray-300 mt-4 w-32 rounded-md py-2 flex'>
    <img src={image} alt={text} className='h-12 w-12 ml-2'/>
    <h4 className='font-semibold ml-2 text-gray-800 mt-3'>{label}</h4>
    </div>
  )
}
