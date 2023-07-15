import React from 'react'
import { image_people } from '../assets'
import styles, { layout } from '../../style'

const PeopleSay = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionImgReverse}>
                <img src={image_people} alt="billing" className="object-contain w-[100%] h-[100%] relative z-[5]" />
            </div>
        </section>
    )
}

export default PeopleSay