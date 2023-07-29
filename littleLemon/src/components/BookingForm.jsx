import React, { useState } from 'react';

export default function BookingForm({availableTimes,handleDateChange,handleSubmit}) {
    const [dateError, setDateError] = useState('');
    const [timeError, setTimeError] = useState('');

    const validateDate = (event) => {
        const date = event.target.value;
        if (!date) {
            setDateError('Date is required');
        } else {
            setDateError('');
            handleDateChange(event);
        }
    };

    const validateTime = (event) => {
        const time = event.target.value;
        if (!time) {
            setTimeError('Time is required');
        } else {
            setTimeError('');
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!dateError && !timeError) {
            handleSubmit();
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleFormSubmit} aria-label="Booking form">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={validateDate} required aria-label="Choose date" />
            {dateError && <div style={{ color: 'red' }}>{dateError}</div>}
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" required onChange={validateTime}>
                <option value="">Select time</option>
                {availableTimes.map(time=><option key ={time}>{time}</option>)}
            </select>
            {timeError && <div style={{ color: 'red' }}>{timeError}</div>}
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" required />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" required>
                <option value="">Select occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
        </div>
    );
}
