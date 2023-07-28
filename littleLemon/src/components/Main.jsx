import React, { useEffect, useReducer } from 'react';
import BookingForm from './BookingForm'; // Don't forget to adjust this path to the actual location of your BookingForm file

function availableTimesReducer(state, action) {
  // Return available times from the action
  return action.times;
}

function Main() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, []);
  console.log(fetchAPI); // Should log a function if fetchAPI is globally available


  const handleSubmit = (event) => {
    event.preventDefault();
    // get your form data and call the API's submit function
    // const success = submitAPI(formData);
    // if (success) alert('Booking confirmed');
  };

  // Initial fetch for today's date
  useEffect(() => {
    const date = new Date(); // today's date
    fetchAPI(date).then(times => dispatchAvailableTimes({ type: 'SET_TIMES', times }));
  }, []);

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    fetchAPI(selectedDate).then(times => dispatchAvailableTimes({ type: 'SET_TIMES', times }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BookingForm
        handleSubmit={handleSubmit}
        handleDateChange={handleDateChange}
        availableTimes={availableTimes}
      />
    </div>
  );
}

export default Main;
