import React, {useReducer} from 'react'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import BookingForm from '../components/BookingForm'

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same available times regardless of the date
      return initializeTimes();
    default:
      return state;
  }
};

const BookingPage = () => {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  return (
    <>
        <Nav/>
        <Header/>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        <Footer/>
    </>
  )
}

export default BookingPage