import React from 'react'
import styles from '../../style'
import { layout } from '../../style'
import Button from './Button'
import { image_barcode } from '../assets'

const Download = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading1}>
          Yuk download dan <br className="sm:block hidden" /> coba Folka <br className="sm:block hidden" /> sekarang!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Mulai baca cerita rakyat sambil bermain,
          Coba Folka di App store sekarang!
        </p>

        <Button styles={`mt-10 py-4 px-6 text-[18px]`} text="Download di App Store" link="https://apps.apple.com/id/app/folka-buku-dongeng-anak/id6444809668?l=id" />
      </div>

      <div className={layout.sectionInfo}>

        <div className={layout.sectionImg}>
          <img src={image_barcode} alt="billing" className="w-[100%] h-[100%]" />

        </div>
        <p className={`${styles.paragraph} self-center text-center sm:ml-8 ml-0`}>
          Atau scan QR berikut melalui <br className="sm:block hidden" /> handphone kamu ya!
        </p>
      </div>
    </section>
  )
}

export default Download