import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10 mt-20'>
      <div className='w-[90%] m-auto flex flex-col lg:flex-row justify-between items-center gap-10 max-w-[2345px] px-3'>
        <div className='flex flex-col items-start'>
          <h2 className='text-lime-500 font-semibold text-[24px] font-ubuntu mb-4'>Get in Touch</h2>
          <p className='text-slate-400'>123 Street Name, City, Country</p>
          <p className='text-slate-400'>Email: info@example.com</p>
          <p className='text-slate-400'>Phone: +123 456 7890</p>
        </div>

        <div className='flex flex-col items-start'>
          <h2 className='text-lime-500 font-semibold text-[24px] font-ubuntu mb-4'>Quick Links</h2>
          <ul className='flex flex-col gap-2'>
            <li><a href="#home" className='hover:text-lime-500 transition'>Home</a></li>
            <li><a href="#about" className='hover:text-lime-500 transition'>About Us</a></li>
            <li><a href="#services" className='hover:text-lime-500 transition'>Services</a></li>
            <li><a href="#contact" className='hover:text-lime-500 transition'>Contact Us</a></li>
          </ul>
        </div>

        <div className='flex flex-col items-start'>
          <h2 className='text-lime-500 font-semibold text-[24px] font-ubuntu mb-4'>Follow Us</h2>
          <div className='flex gap-4'>
            <a href="#" className='text-slate-400 hover:text-lime-500 transition'>
              <FaFacebookF size={24} />
            </a>
            <a href="#" className='text-slate-400 hover:text-lime-500 transition'>
              <FaTwitter size={24} />
            </a>
            <a href="#" className='text-slate-400 hover:text-lime-500 transition'>
              <FaInstagram size={24} />
            </a>
            <a href="#" className='text-slate-400 hover:text-lime-500 transition'>
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className='border-t border-slate-600 mt-6 pt-4 text-center'>
        <p className='text-slate-400 text-sm'>© {new Date().getFullYear()} Web Pulse. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
