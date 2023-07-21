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
          <h2 className={styles.heading3}>
            Jalan Cerita<br className="sm:block hidden" /> Interaktif
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Mengajak anak untuk <span className='font-bold'>membuat <br className='sm:block hidden'></br>keputusan dan eksplorasi <br className='sm:block hidden'></br>mandiri</span> untuk <span className='font-bold'>membangun rasa <br className='sm:block hidden'></br>percaya diri, berpikir kritis dan <br className='sm:block hidden'></br>kemampuan memecahkan <br className='sm:block hidden'></br>masalah.</span>
          </p>

        </div>
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInfoTwo}>
          <h2 className={styles.heading3}>
            Mini Games
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Permainan logika untuk <span className='font-bold'><br className='sm:block hidden'></br>meningkatkan keterampilan <br className='sm:block hidden'></br>berpikir logis, empati dan <br className='sm:block hidden'></br>pemahaman membaca.</span>
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
          <h2 className={styles.heading3}>
            Konten Cerita<br className="sm:block hidden" /> Terbaik
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Pilihan cerita rakyat Indonesia <br className='sm:block hidden'></br>terbaik yang <span className='font-bold'>disesuaikan <br className='sm:block hidden'></br>untuk anak.</span>
          </p>

        </div>
      </section>

      <section className={layout.section}>
        <div className={layout.sectionInfoTwo}>
          <h2 className={styles.heading3}>
            Audio Dongeng
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Membacakan dongeng pada anak <br className='sm:block hidden'></br>membantu mereka <span className='font-bold'>memvisualisasi <br className='sm:block hidden'></br>kata-kata yang diucapkan</span> dan <span className='font-bold'><br className='sm:block hidden'></br>meningkatkan keterampilan <br className='sm:block hidden'></br>komunikasi.</span>
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