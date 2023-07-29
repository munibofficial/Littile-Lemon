import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm'; // Don't forget to adjust this path to the actual location of your BookingForm file

const initialAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function availableTimesReducer(state, action) {
  // For now, this reducer just returns the same available times regardless of the date
  return initialAvailableTimes;
}

function Main() {
  const [date, setDate] = useState('');
  const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, initialAvailableTimes);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Booking confirmed for date: ${date}`);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    // Dispatch the state change when the date field is changed
    dispatchAvailableTimes({ type: 'CHANGE_TIMES', date: event.target.value });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BookingForm
        date={date}
        handleDateChange={handleDateChange}
        handleSubmit={handleSubmit}
        availableTimes={availableTimes}
      />
    </div>
  );
}

export default Main;
