import React from 'react';
import { AiOutlineAppstore } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import headerImage from './../Image/FB_IMG_1664640739491 1.png'
import logo from './../Image/world-cup-2022-logo 1.png';
import stadium from './../Image/Rectangle 39984.png';
import stadium2 from './../Image/Rectangle 39985.png';
import stadium3 from './../Image/Rectangle 39986.png';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <a className='font-bold mx-6 text-fifa hover:text-black' href="#">Event</a>
                        <a className='font-bold mx-6 text-fifa hover:text-black' href="#">Ticket</a>
                        <a className='font-bold mx-6 text-fifa hover:text-black' href="#">Team</a>
                        <a className='font-bold mx-6 text-fifa hover:text-black' href="#">News</a>
                    </div>
                    <div className="navbar-center">
                        <img className='h-32' src={logo} alt="" />
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fifa" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <AiOutlineAppstore className='h-5 w-5 text-fifa'></AiOutlineAppstore>
                        <BiShareAlt className='h-5 w-5 text-fifa ml-4'></BiShareAlt>

                    </div>
                </div>
            </nav>


            <header className='flex justify-between'>
                <div className='mt-24'>
                    <p className='text-fifa my-4 font-medium'>#1 No 1  FIFA World Cup Qatar 2022™</p>
                    <h1 className='font-bold text-7xl uppercase'>Countdown to Qatar 2022</h1>
                    <p className='text-gray-500 my-8 px-4 w-[630px] font-medium'>As we count down to the start of the global showpiece in Qatar on 20 November, FIFA+ is showcasing 100 of the greatest moments in FIFA World Cup history.</p>

                    <div className='my-10'>
                        <button className='btn bg-fifa btn-lg mx-4'>Buy Now</button>
                        <button className='btn btn-outline btn-lg mx-4'>Read More</button>
                    </div>

                </div>

                <div>
                    <img className='w-[900px] h-[850px] relative' src={headerImage} alt="" />
                </div>

            </header>
            <img className='absolute top-[800px] left-0 px-10 ' src={stadium} alt="" />
            <div className='flex mt-[440px]'>
                <div>
                    <img className='pr-10' src={stadium2} alt="" />
                </div>
                <div>
                    <img src={stadium3} alt="" />
                    <div className='px-6 mt-12'>
                        <p className='font-bold text-4xl uppercase mt-6'>The ultimate World Cup package</p>
                        <p className='text-gray-500 font-medium my-6'>Book your hospitality tickets and experience Qatar 2022™ in style</p>
                        <a className='text-fifa font-medium' href="#">Find Out More</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;