import React, { useState } from 'react';
import Card from './Card';

const Events = ({ events }) => {
  const [filterSport, setFilterSport] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const filteredEvents = events.filter(event => {
    return (
      (!filterSport || event.sport === filterSport) &&
      (!filterDate || event.date === filterDate)
    );
  });
  
  return (
    <div className="p-2 font-serif">
      <div className='flex justify-start gap-5'>
      <div className="mb-4">
        <label className="mr-2 text-white mb-2">Filter by Sport:</label>
        <select value={filterSport} onChange={(e) => setFilterSport(e.target.value)} className="px-2 py-1 border rounded bg-indigo-800 text-white">
          <option value="">All</option>
          <option value="Football">Football</option>
          <option value="Basketball">Basketball</option>
          <option value="Cricket">Cricket</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="mr-2 text-white mb-2">Filter by Date:</label>
        <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} className="px-1 py-0.5 border rounded bg-indigo-800 text-white" />
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredEvents.map((event, index) => (
          <Card key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
