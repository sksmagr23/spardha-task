import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from './components/Events';
import eventsdata from './data/events.json'

const App = () => {  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-4 py-6 bg-blue-950">
        <Events events={eventsdata} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
