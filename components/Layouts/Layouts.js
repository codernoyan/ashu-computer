import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layouts = ({children}) => {
  return (
    <div className='bg-dark'>
      <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
        <main>
          {children}
        </main>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Layouts;