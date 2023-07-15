import React, { useState } from 'react'
import { close, menu, logo_folka } from '../assets'
import { navLinks } from '../constant'

const Navbar = () => {
    const [toggle, settoggle] = useState(false);

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <div className="flex flex-row">
                <img
                    src={logo_folka}
                    alt="folka"
                    className="ss:w-[64px] ss:h-[64px] w-[48px] h-[48px]"
                />
                <h4 className="font-nunito font-extrabold ss:text-[48px] text-[32px] leading-[32px] ml-3 text-white self-center">
                    Folka
                </h4>
            </div>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1 sticky top-0'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-nunito font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => settoggle((prev) => !prev)}></img>

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#000300] bg-opacity-50 backdrop-blur-sm absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-nunito font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar