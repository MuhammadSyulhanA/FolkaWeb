import React from 'react'
import HeroImage from "../assets/image_hero.png"

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-dark-purple'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl md:text-7xl font-bold text-white mt-56 md:mt-0'>Bring Folklore to Life with Folka</h2>
                    <p className='text-white text-lg md:text-2xl py-4 max-w-md'>Aplikasi dongeng interaktif dan eksploratif untuk anak-anak cerdas dan penuh rasa ingin tau!</p>

                    <div>
                        <button className='text-white w-fit px-6 py-3 my-2 fle items-center rounded-3xl bg-salmon cursor-pointer font-bold' onClick={()=> window.open("https://apps.apple.com/id/app/folka-buku-dongeng-anak/id6444809668?l=id", "_blank")}>Cobain Sekarang!
                        </button>

                    </div>
                </div>

                <div>
                    <img src={HeroImage} alt="folka hero" className='mx-auto w-[700px]'></img>
                </div>
            </div>
        </div>
    )
}

export default Home