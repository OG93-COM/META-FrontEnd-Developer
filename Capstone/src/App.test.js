import { render,fireEvent , screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Booking Form", () => {
  test('Renders the BookingForm heading', () => {

    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const headingElement = screen.getByText(/Choose date/i);
    expect(headingElement).toBeInTheDocument();

  });
  test('initializeTimes returns the correct initial state', () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
  });

  test('updateTimes returns the same state when an unknown action is dispatched', () => {
    const initialState = initializeTimes();
    const newState = updateTimes(initialState, { type: 'UNKNOWN_ACTION' });
    expect(newState).toEqual(initialState);
  });

  test('updateTimes returns the updated times when UPDATE_TIMES action is dispatched', () => {
    const initialState = initializeTimes();
    const newState = updateTimes(initialState, { type: 'UPDATE_TIMES', payload: '2023-01-01' });
    expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']); 
  });

})
