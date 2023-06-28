import React from 'react'
import HeroImage from "../assets/image_hero.png"
import ChoiceEnding from "../assets/image_choiceending.png"
import BookDetail from "../assets/image_bookdetail.png"
import HomePage from "../assets/image_homepage.png"
import MiniGames from "../assets/image_minigames.png"

const About = () => {
    return (
        <div name="tentang kita" className='w-full h-fit bg-dark-purple text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='flex justify-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Tentang Folka</p>
                </div>

                <p className='text-xl mt-10 mb-10 items-center'>
                    Folka bertujuan untuk meningkatkan minat baca anak usia 6-8 tahun untuk meningkatkan keterampilan sosial-emosional mereka melalui  cerita rakyat yang interaktif & imersif.
                </p>

                {/* p1 */}
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-2/4 md:flex-row'>
                    <div>
                        <img src={ChoiceEnding} alt="folka hero" className='mx-auto w-auto md:w-full'></img>
                    </div>
                    
                    <div className='flex flex-col justify-center h-full sm:ml-11'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-white'>Jalan Cerita Interaktif</h2>
                        <p className='text-white py-4 max-w-md'>Mengajak anak untuk membuat keputusan dan eksplorasi mandiri untuk membangun rasa percaya diri, berpikir kritis dan kemampuan memecahkan masalah.</p>
                    </div>
                </div>

                {/* p1 */}
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-2/4 md:flex-row mt-24'>
                    <div className='flex flex-col justify-center h-full sm:mr-11'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-white'>Mini Games</h2>
                        <p className='text-white py-4 max-w-md'>Permainan logika untuk meningkatkan keterampilan berpikir logis, empati dan pemahaman membaca.</p>
                    </div>

                    <div>
                        <img src={MiniGames} alt="folka hero" className='mx-auto w-auto md:w-full'></img>
                    </div>
                </div>

                {/* p1 */}
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-2/4 md:flex-row mt-24'>
                    <div>
                        <img src={HomePage} alt="folka hero" className='mx-auto w-auto md:w-full'></img>
                    </div>
                    
                    <div className='flex flex-col justify-center h-full sm:ml-11'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-white'>Konten Cerita Terbaik</h2>
                        <p className='text-white py-4 max-w-md'>Pilihan cerita rakyat Indonesia terbaik yang disesuaikan untuk anak.</p>
                    </div>
                </div>

                {/* p1 */}
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-2/4 md:flex-row my-24'>
                    <div className='flex flex-col justify-center h-full sm:mr-11'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-white'>Audio Dongeng</h2>
                        <p className='text-white py-4 max-w-md'>Membacakan dongeng pada anak membantu mereka memvisualisasi kata-kata yang diucapkan dan meningkatkan keterampilan komunikasi.</p>
                    </div>

                    <div>
                        <img src={BookDetail} alt="folka hero" className='mx-auto w-auto md:w-full'></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About