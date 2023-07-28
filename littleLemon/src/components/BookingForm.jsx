import React from 'react';

export default function BookingForm({availableTimes,handleDateChange,handleSubmit}) {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleDateChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time">
              {availableTimes.map(time=><option key ={time}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onChange={handleSubmit}/>
        </form>
        </div>
    );
}
