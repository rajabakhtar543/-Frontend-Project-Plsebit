import React,{useEffect} from 'react'
import about from '../assets/about.png'
import { FaChevronCircleRight } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine"
    });
  }, []);

  return (
    <section id='about' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between item-center gap-28 py-20 max-w-[2345px] px-3'>
      <div>
        <img data-aos="zoom-in" data-aos-delay="200" src={about} alt="" className='lg:w-[600px] lg:h-auto p-2 contain' />
      </div>
      <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-start lg:gap-2 gap-4 p-2'>
        <h1 className='text-lime-500 font-semibold text-[19px] font-ubuntu'>Who We Are</h1>
        <h1 className='text-black font-bold lg:text-[40px] text-[50px] lg:leading-[60px] leading-[60px] font-ubuntu'>The Leading Social Media Marketing Agency</h1>
        <p className='font-ubuntu text-[18px] text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima alias velit in tenetur reiciendis laborum aliquam quidem.</p>
        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6'/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quia.</p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6'/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quia.</p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6'/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quia.</p>
        </div>
        <button className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white'>Discover More</button>

      </div>
    </section>
  )
}

export default About
