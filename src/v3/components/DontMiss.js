import React from 'react'
import styles, { layout } from '../../style'
import Button from './Button'
import { image_hp, image_miss, image_hp2 } from '../assets'

const DontMiss = () => {
    return (
        <section className={layout.sectionReverse}>
            <div className={`${layout.sectionImgReverse}`}>
                <a href='https://www.instagram.com/sahabatfolka/' target='_blank' rel='noreferrer'>
                    <img src={image_hp2} alt="billing" className="object-contain w-[100%] h-[100%] relative z-[5]" />
                </a>
            </div>

            <div className={`${layout.sectionImg} relative`}>
                <img src={image_miss} alt="billing" className="object-contain w-[100%] h-[100%] relative z-[5]" />
                <div class="absolute w-full z-[6]">
                    <h1 class="text-white font-nunito font-semibold ss:text-[30px] text-[16px] text-center">Jangan sampai ketinggalan!</h1>

                    <p class={`font-nunito font-normal text-white ss:text-[18px] text-[14px] ss:leading-[30.8px] leading-[20.8px] text-center`}>
                        Tungguin terus info-info menarik dari Folka<br></br> {" "}lewat Instagram kita yaa
                    </p>

                    <div className={`${styles.flexCenter}`}>
                        <Button styles={`ss:mt-5 ss:py-4 ss:px-6 ss:text-[18px] mt-2 py-2 px-4 text-[12px]`} text="Follow IG Folka" link="https://www.instagram.com/sahabatfolka/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DontMiss
