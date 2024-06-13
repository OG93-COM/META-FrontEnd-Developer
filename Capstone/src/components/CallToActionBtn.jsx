import React from 'react'

const CallToActionBtn = ({textBtn}) => {
  return (
    <button
     className='bg-[#f9d316] text-slate-900 py-2 px-4 rounded m-3 mx-auto font-semibold hover:bg-[#ffe100] duration-300'>
     {textBtn}
    </button>
  )
}

export default CallToActionBtn