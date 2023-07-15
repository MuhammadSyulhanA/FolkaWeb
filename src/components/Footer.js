import React from 'react'
import Logo from "../assets/logo.png"
import LogoLK from "../assets/logo_lk.png"
import LogoIG from "../assets/logo_ig.png"
import LogoMail from "../assets/logo_mail.png"

const Footer = () => {
  return (
    <div className='w-full h-fit'>
      <div className='max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full'>
        <footer class="bg-white m-4">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:justify-between">
            <a href="/" class="flex sm:mb-0">
              <img src={Logo} class="h-10 md:h-16 mr-3 self-start" alt="folka Logo" />
              <span class="self-start whitespace-nowrap text-black">
                <p className='text-sm md:text-xl font-extrabold'>Folka</p>
                <p className='text-xs md:text-lg font-bold'>Bringing Folklore to Life</p>
              </span>
            </a>

            <div className='mt-8 md:mt-0 mb-8 md:mb-0'>
              <div class="grid grid-rows-4 grid-flow-col justify-self-center">
                <div className='text-base md:text-xl font-extrabold'>
                  Stay in touch with us!
                </div>
                <div className=''>
                  <a href="/" class="flex">
                    <img src={LogoIG} class="h-5 md:h-8 mr-3 self-center" alt="ig Logo" />
                    <span class="self-center whitespace-nowrap text-black">
                      <p className='text-base md:text-xl font-extrabold'>@sahabatfolka</p>
                    </span>
                  </a>
                </div>
                <div>
                  <a href="/" class="flex">
                    <img src={LogoMail} class="h-5 md:h-8 mr-3 self-center" alt="lk Logo" />
                    <span class="self-center whitespace-nowrap text-black">
                      <p className='text-base md:text-xl font-extrabold'>sahabatfolka@gmail.com</p>
                    </span>
                  </a>
                </div>
                <div>
                  <a href="/" class="flex">
                    <img src={LogoLK} class="h-5 md:h-8 mr-3 self-center" alt="lk Logo" />
                    <span class="self-center whitespace-nowrap text-black">
                      <p className='text-base md:text-xl font-extrabold'>Folka</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span class="text-sm md:text-lg font-extrabold text-mist-gray">© 2023 <a href="/" class="hover:underline">Copyright 2023 Folka</a>. All Rights Reserved.
          </span>
        </footer>
        {/* <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span> */}
      </div>
    </div>
  )
}

export default Footer