import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-2.5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.jpeg" alt="Logo" className="h-14 w-18 mr-4" />
          <h1 className="text-2xl sm:text-3xl font-bold font-serif">Spardha Event Planner</h1>
        </div>
        <div className='sm:hidden md:block hidden'>
          <p className="italic font-semibold">"Stay ahead of the action!"</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
