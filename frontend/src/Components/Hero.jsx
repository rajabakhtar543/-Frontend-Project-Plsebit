import React, { useEffect } from 'react';
import Herobanner from "../assets/herobanner.png";
import Clients from "../assets/clients.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  

  return (
    <section id='hero' className='w-[90%] flex lg:flex-row flex-col m-auto justify-between gap-20  py-20 sm:px-20 max-w-[2345px] mx-auto'>
      <div className='flex flex-col  justify-center items-start sm:gap-8 md:gap-10 lg:gap-4 gap-10'>
        <h1  className='text-black font-semibold lg:text-[50px] text-[60px] leading-[80px] font-ubuntu'>
          Social Media Marketing
        </h1>
        <p  data-aos-delay='400' className='font-ubuntu text-[20px] text-slate-700'>
          We design exceptional brands, products, web-apps, <br /> websites for startups and enterprises.
        </p>
        <button  className='font-ubuntu font-semibold rounded-full bg-limegreen hover:bg-black hover:text-white px-6 py-4 text-[17px]'>
          Get Started Now
        </button>
        <div  className='flex lg:flex-row flex-col justify-center w-full lg:items-center items-start gap-2'>
          <img src={Clients} alt="Clients" />
          <p className='font-ubuntu text-[20px] font-bold text-black'>Trusted By 5000+ Worldwide brands and customers</p>
        </div>
      </div>
      <div>
        
        <img  src={Herobanner} className=' lg:w-[400px] lg:h-auto contain' alt="Hero Banner" />
      </div>
    </section>
  );
}

export default Hero;
