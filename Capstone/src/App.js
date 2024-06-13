import BookingPage from './views/BookingPage';
import Homepage from './views/Homepage';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/booking' element={<BookingPage/>}/>
    </Routes>

  );
}

export default App;
