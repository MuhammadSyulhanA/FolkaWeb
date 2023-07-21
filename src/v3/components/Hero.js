import React from 'react'
import styles from '../../style'
import { image_hero } from '../assets'
import Button from './Button'

const Hero = () => {
    return (
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-nunito font-extrabold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                        Bring Folklore <br className='sm:block hidden'></br> {" "}
                        <span>to Life with Folka</span> {" "}
                    </h1>
                </div>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Aplikasi dongeng interaktif dan eksploratif untuk<br className='sm:block hidden'></br> {" "} anak-anak cerdas dan penuh rasa ingin tau!
                </p>
                <Button styles={`mt-10 py-4 px-6 text-[18px]`} text="Cobain Sekarang!" link="https://apps.apple.com/id/app/folka-buku-dongeng-anak/id6444809668?l=id" />
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={image_hero} alt="billing" className='w-[100%] h-[100%] realtive z-[5]'></img>
            </div>
        </section>
    )
}

export default Hero