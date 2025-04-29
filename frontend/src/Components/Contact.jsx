import React, { useState } from 'react';
import contact from '../assets/contact.png';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send to backend or show alert)
    setStatus('Thank you! Your message has been submitted.');
    e.target.reset(); // clear form
  };

  return (
    <section
      id='contact'
      className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 max-w-[2345px] px-3'
    >
      <div>
        <img
          src={contact}
          alt="Contact Us"
          className='lg:w-[650px] lg:h-auto m-2 object-contain'
        />
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className='flex flex-col justify-center items-start lg:gap-2 gap-4 p-2'
      >
        <h1 className='text-lime-500 font-semibold text-[19px] font-ubuntu'>CONTACT US</h1>
        <h1 className='text-black font-bold lg:text-[40px] text-[50px] lg:leading-[60px] leading-[60px] font-ubuntu'>
          We Are Ready To Hear You
        </h1>
        <p className='font-ubuntu text-[18px] text-slate-700'>
          Send Your Query To Our Team. We Will Get Back To You As Soon As Possible.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className='flex flex-col w-full lg:max-w-md gap-4'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            className='border rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            className='border rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500'
            required
          />
          <textarea
            name='message'
            placeholder='Your Message'
            className='border rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500'
            rows='4'
            required
          />
          <button
            type='submit'
            className='bg-lime-500 px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white transition'
          >
            Submit
          </button>
        </form>

        {/* Status Message */}
        {status && <p className='mt-4 text-green-600 font-ubuntu'>{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
