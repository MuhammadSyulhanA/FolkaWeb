import React from 'react'
import { dataProfile } from '../constant'
import styles, { layout } from '../../style'
import ProfileCard from './ProfileCard'

const Profile = () => {
    return (
        <div id="contact" className='w-full h-fit text-white' style={{ backgroundImage: "url(/img/bg_profile.png)" }}>
            {/* <div className={layout.section}>
                <div className={layout.sectionInfo}> */}
            <section className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>

                    <div className='py-4 font-nunito text-2xl md:text-4xl text-black font-black'>Kontak kita untuk kolaborasi yuk!</div>
                    <div className='py-4 font-nunito text-xl md:text-2xl text-black font-bold'>For business and collaborations: <br></br>sahabatfolka@gmail.com</div>
                    <div id='content' className='carousel flex items-center justify-start overflow-x-auto scrollbar-hide'>

                        {dataProfile.map((card) => <div><ProfileCard key={card.id} {...card} /></div>)}

                    </div>
                </div>
            </section>

            {/* </div>
            </div> */}
        </div>
    )
}
export default Profile