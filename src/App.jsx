import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from './components/Events';

const App = () => {
  const events = [
    { sport: 'Football', teams: 'Team A vs Team B', date: '2024-08-20', time: '18:00', location: 'ADV Ground' },
    { sport: 'Basketball', teams: 'Team C vs Team D', date: '2024-08-21', time: '20:00', location: 'SAC' },
    { sport: 'Cricket', teams: 'Team E vs Team F', date: '2024-08-22', time: '15:00', location: 'Gymkhana' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 bg-indigo-950">
        <Events events={events} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
