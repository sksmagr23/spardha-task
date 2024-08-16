import {React, useState, useEffect} from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';
const Card = ({ event }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calcTimeLeft = () => {
      const eventDateTime = new Date(`${event.date}T${event.time}`);
      const now = new Date();
      const diff = eventDateTime - now;

      let timeLeftStr = '';

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timeLeftStr = `Event begins in : ${days}d ${hours}h ${minutes}min ${seconds}s`;
      } else {
        timeLeftStr = 'Event Started';
      }

      setTimeLeft(timeLeftStr);
    };

    calcTimeLeft();
    const timerId = setInterval(calcTimeLeft, 1000);

    return () => clearInterval(timerId);
  }, [event.date, event.time]);


  const getSportLogo = (sport) => {
    switch (sport) {
      case 'Football':
        return '/football.png';
      case 'Basketball':
        return '/basketball.png';
      case 'Cricket':
        return '/cricket.png';
      default:
        return '/default.png';
    }
  };

  return (
    <div className="mt-2 p-3 bg-gradient-to-r from-indigo-800 hover:bg-indigo-700 shadow-lg rounded-xl overflow-hidden transition-all duration-200 transform hover:scale-105 border-black border flex items-center justify-between">
      <div>
      <h2 className="text-2xl mb-2 text-gray-200 font-extrabold">{event.teams}</h2>
      <div className="font-semibold flex items-center text-gray-300 mb-1">
        <FiClock className="mr-1" />
        <span>{event.date} at {event.time}</span>
      </div>
      <div className="font-semibold flex items-center text-gray-300">
        <FiMapPin className="mr-1" />
        <span>{event.location}</span>
      </div>
      <div className="text-yellow-400 font-medium text-sm">
        {timeLeft}
      </div>
      </div>
      <img src={getSportLogo(event.sport)} alt={event.sport} className="h-16 w-16 mx-4 rounded-full" />
    </div>
  );
};

export default Card;
