import React, { useEffect } from 'react';
import { testidata } from '../export';
import { useSwipeable } from 'react-swipeable'; // Import swipeable
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import './clients.css';

const Clients = () => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => scrollContainer('left'),
    onSwipedRight: () => scrollContainer('right'),
  });

  const scrollContainer = (direction) => {
    const container = document.getElementById('scrollable-clients');
    if (direction === 'right') container.scrollBy({ left: -380, behavior: 'smooth' });
    else if (direction === 'left') container.scrollBy({ left: 380, behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section
      id='Clients'
      className='w-[90%] m-auto max-w-[2345px] mx-auto py-20 relative'
    >
      <div className='flex flex-col items-center text-center mb-12'>
        <p className='text-[#78d138] font-bold font-ubuntu text-[20px]'>
          Our Customers' Feedback
        </p>
        <h1 className='text-black font-semibold lg:text-[60px] text-[40px] lg:leading-[70px] leading-[50px] font-ubuntu'>
          Our Clients Reviews
        </h1>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scrollContainer('right')}
        className='absolute left-1 top-1/2 transform -translate-y-1/3 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-600 transition'
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-arrow-left'>
          <line x1='19' y1='12' x2='5' y2='12'></line>
          <polyline points='12 19 5 12 12 5'></polyline>
        </svg>
      </button>

      {/* Scrollable Container */}
      <div
        id='scrollable-clients'
        {...swipeHandlers}
        className='flex overflow-x-hidden gap-8 scroll-smooth'
        style={{ scrollBehavior: 'smooth' }} // Smooth scrolling behavior
      >
        {testidata.map((item, index) => (
          <div
            key={index}
            className='flex flex-col min-w-[344px] justify-between items-center gap-6 bg-black p-8 rounded-xl shadow hover:shadow-2xl transform hover:scale-105 transition-all duration-300'
            data-aos="fade-up" // AOS attribute for animation
          >
            <div className='flex flex-row'>
              {/* Star Icons */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='#FFD700'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' />
                </svg>
              ))}
            </div>

            <h1 className='text-limegreen font-ubuntu text-lg font-semibold text-center leading-relaxed'>
              "{item.review}"
            </h1>
            <p className='text-white font-ubuntu text-xl font-semibold'>
              {item.name}
            </p>
            <img
              src={item.post} // Directly reference the `post` image field
              alt={`${item.name}'s image`}
              className='w-16 h-16 object-cover rounded-full border-2 border-lime-500'
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scrollContainer('left')}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-600 transition'
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-arrow-right'>
          <line x1='5' y1='12' x2='19' y2='12'></line>
          <polyline points='12 5 19 12 12 19'></polyline>
        </svg>
      </button>
    </section>
  );
};

export default Clients;
