import React from 'react'
import { image_bookdetail, image_choiceending, image_minigames, image_homepage } from '../assets'
import styles, { layout } from '../../style'

const About = () => {
  return (
    <div>
      <section className={layout.sectionReverse}>
        <div className={layout.sectionImgReverseTwo}>
          <img src={image_choiceending} alt="billing" className="object-contain w-[100%] h-[100%] relative z-[5]" />
        </div>

        <div className={layout.sectionInfoTwo}>
          <h2 className={styles.heading2}>
            Jalan Cerita<br className="sm:block hidden" /> Interaktif
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Mengajak anak untuk membuat keputusan dan eksplorasi mandiri untuk membangun rasa percaya diri, berpikir kritis dan kemampuan memecahkan masalah.
          </p>

        </div>
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInfoTwo}>
          <h2 className={styles.heading2}>
            Mini Games
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Permainan logika untuk meningkatkan keterampilan berpikir logis, empati dan pemahaman membaca.
          </p>
        </div>

        <div className={layout.sectionImgReverseTwo}>
          <img src={image_minigames} alt="billing" className="object-contain w-[100%] h-[100%] relative z-[5]" />
        </div>
      </section>

      <section className={layout.sectionReverse}>
        <div className={layout.sectionImgReverseTwo}>
          <img src={image_homepage} alt="billing" className="object-contain w-[100%] h-[100%] relative z-[5]" />
        </div>

        <div className={layout.sectionInfoTwo}>
          <h2 className={styles.heading2}>
            Konten Cerita<br className="sm:block hidden" /> Terbaik
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Pilihan cerita rakyat Indonesia terbaik yang disesuaikan untuk anak.
          </p>

        </div>
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInfoTwo}>
          <h2 className={styles.heading2}>
            Audio Dongeng
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Membacakan dongeng pada anak membantu mereka memvisualisasi kata-kata yang diucapkan dan meningkatkan keterampilan komunikasi.
          </p>
        </div>

        <div className={layout.sectionImgReverseTwo}>
          <img src={image_bookdetail} alt="billing" className="object-contain w-[100%] h-[100%] relative z-[5]" />
        </div>
      </section>
    </div>
  )
}

export default About