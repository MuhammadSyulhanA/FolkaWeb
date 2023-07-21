import React from 'react'
import styles from '../../style'

const HeaderAbout = () => {
  return (
    <section id='about' className={`flex-row flex-wrap sm:mb-20 mb-6`}>
      <div className='flex justify-center mt-[80px] md:mt-0'>
        <p className='font-nunito font-extrabold ss:text-[38px] text-[26px] inline text-white'>Tentang Folka</p>
      </div>

      <p className={`${styles.paragraph} items-center text-center text-white mt-5`}>
        Folka bertujuan untuk meningkatkan minat baca anak usia 6-8 tahun untuk <span className='font-bold'>meningkatkan keterampilan sosial-<br className='sm:block hidden'></br>emosional mereka</span> melalui <span className='font-bold'>cerita rakyat yang interaktif & imersif.</span>
      </p>
    </section>
  )
}

export default HeaderAbout