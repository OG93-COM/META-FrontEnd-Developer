import BookingPage from './views/BookingPage';
import Homepage from './views/Homepage';
import { Routes, Route } from 'react-router-dom';
import NotFound from './views/NotFound';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/booking' element={<BookingPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
