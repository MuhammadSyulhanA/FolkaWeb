import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
import Logo from "../assets/logo.png"

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'tentang kita'
        },
        {
            id: 2,
            link: 'contact'
        }
    ]

    return (
        <header className='py-2 bg-dark-purple w-full fixed z-20'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-dark-purple'>
                    <div>
                        <h1 className='w-full text-xl md:text-5xl ml-2 font-extrabold'>
                            <span>
                                <img src={Logo} alt="folka hero" className='inline h-10 w-10 md:h-14 md:w-14 mr-3'></img>
                            </span>
                            Folka
                        </h1>
                    </div>

                    <ul className='hidden md:flex'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'>
                                <Link to={link} smooth duration={500}>{link}</Link>
                            </li>
                        ))}
                    </ul>

                    <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
                        {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
                    </div>

                    {nav && (
                        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] bg-opacity-50 backdrop-blur-sm ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                            <div className='mt-4'></div>
                            {links.map(({ id, link }) => (
                                <li key={id} className='px-4 cursor-pointer capitalize py-3 text-xl'>
                                    <Link to={link} onClick={() => setNav(!nav)} smooth duration={500}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            </div>
        </header>
    )
}

export default NavBar