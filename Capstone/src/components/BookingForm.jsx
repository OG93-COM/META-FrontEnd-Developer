import React, { useState } from 'react'

const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]

const BookingForm = () => {
    const [bookDate, setBookDate] = useState('');
    const [bookTime, setBookTime] = useState(availableTimes[0]);
    const [numberGuest, setNumberGuest] = useState(0);
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submit")
        console.log(`New reservation on ${bookDate} at ${bookTime} with ${numberGuest} Guests for occasion of ${occasion}`)
    }

  return (
    <>
    <h1 className='text-4xl font-semibold mb-10 text-center text-gray-700'>Reserve Now Your Table</h1>
    <form onSubmit={handleSubmit}
    className='grid justify-center items-center w-full mx-auto gap-5 py-10 bg-slate-50 shadow-md' >
        <label className='block text-gray-700 text-sm font-bold w-[450px]' htmlFor="res-date">Choose date</label>
        <input
        onChange={e => setBookDate(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
        type="date" id="res-date" required/>
        <label className='block text-gray-700 text-sm font-bold' htmlFor="res-time">Choose time</label>
        <select
        onChange={e => setBookTime(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" 
        id="res-time" required>
            {availableTimes.map((avTime, idx) => (<option key={idx}>{avTime}</option>)  )}
            
        </select>
        <label className='block text-gray-700 text-sm font-bold' htmlFor="guests">Number of guests</label>
        <input
        onChange={e => setNumberGuest(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
         type="number" placeholder="1" min="1" max="10" id="guests" value={numberGuest}/>
        <label className='block text-gray-700 text-sm font-bold' htmlFor="occasion">Occasion</label>
        <select
        onChange={e => setOccasion(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" 
        id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input
        type="submit"
        className="bg-[#f9d316] hover:bg-[#ffe100] duration-300 text-slate-700 font-bold my-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        value="Make Your reservation"/>
    </form>
    </>
    

  )
}

export default BookingForm