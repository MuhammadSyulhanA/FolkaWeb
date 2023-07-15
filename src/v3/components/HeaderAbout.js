import React from 'react'
import styles from '../../style'

const HeaderAbout = () => {
  return (
    <section id='about' className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div className='flex justify-center mt-[80px] md:mt-0'>
        <p className='font-nunito font-extrabold ss:text-[38px] text-[26px] inline text-white'>Tentang Folka</p>
      </div>

      <p className={`${styles.paragraph} items-center text-center text-white mt-5`}>
        Folka bertujuan untuk meningkatkan minat baca anak usia 6-8 tahun untuk meningkatkan keterampilan sosial-emosional mereka melalui  cerita rakyat yang interaktif & imersif.
      </p>
    </section>
  )
}

export default HeaderAbout