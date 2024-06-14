import React from 'react'

const BookingForm = () => {
  return (

    <form className='grid justify-center items-center w-full mx-auto gap-5' >
        <label className='block text-gray-700 text-sm font-bold w-[450px]' for="res-date">Choose date</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="date" id="res-date"/>
        <label className='block text-gray-700 text-sm font-bold' for="res-time">Choose time</label>
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        <label className='block text-gray-700 text-sm font-bold' for="guests">Number of guests</label>
        <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
         type="number" placeholder="1" min="1" max="10" id="guests"/>
        <label className='block text-gray-700 text-sm font-bold' for="occasion">Occasion</label>
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input
        type="submit"
        className="bg-[#f9d316] hover:bg-[#ffe100] duration-300 text-slate-700 font-bold my-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        value="Make Your reservation"/>
    </form>

  )
}

export default BookingForm