import React from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';
const Card = ({ event }) => {
  return (
    <div className="mt-2 p-3 bg-indigo-800 hover:bg-indigo-600 shadow-2xl rounded-xl overflow-hidden transition-all duration-200 transform hover:scale-105 border-black border">
      <h2 className="text-xl font-bold mb-2 text-gray-200">{event.teams}</h2>
      <div className="flex items-center text-gray-300 mb-1">
        <FiClock className="mr-1" />
        <span>{event.date} at {event.time}</span>
      </div>
      <div className="flex items-center text-gray-300">
        <FiMapPin className="mr-1" />
        <span>{event.location}</span>
      </div>
    </div>
  );
};

export default Card;
