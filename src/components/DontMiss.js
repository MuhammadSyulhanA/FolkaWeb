import React from 'react'
import ImageHP from "../assets/image_hp.png"
// import Miss from "../assets/image_miss.png"

const DontMiss = () => {
    return (
        <div className='w-full h-fit bg-dark-purple text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                {/* p1 */}
                <div class="grid grid-cols-1 md:grid-cols-5 gap-3 my-20">
                    <div class="col-span-2">
                        <img src={ImageHP} alt="folka hero" className='mx-auto md:w-[560px] w-full'></img>
                    </div>
                    <div class="col-span-3 h-[300px] self-center flex flex-col justify-center" style={{ backgroundImage: "url(/img/miss.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        <div className='w-[450px] ml-4 md:ml-9'>
                            <h3 class="text-xl md:text-2xl text-white font-extrabold text-center">
                                Jangan sampai ketinggalan!</h3>
                            <p class="mt-2 text-lg md:text-lg text-center">Tungguin terus info-info menarik dari Folka lewat Instagram kita yaa</p>
                            <div className='flex flex-col justify-center items-center'>
                                <button className='text-white w-fit px-6 py-3 my-2 fle items-center rounded-3xl bg-salmon cursor-pointer font-bold' onClick={() => window.open("https://www.instagram.com/sahabatfolka/", "_blank")}>Follow IG Folka
                                </button>
                            </div>
                        </div>
                        {/* <div className='relative z-10'>
                            <img src={Miss} alt="folka hero" className='mx-auto md:w-[560px] w-full'></img>
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <h3 class="text-2xl text-white font-extrabold text-center w-80">
                                    Jangan sampai ketinggalan!</h3>
                                <p class="mt-2 text-lg text-center">Tungguin terus info-info menarik dari Folka lewat Instagram kita yaa</p>
                                <div className='flex justify-center items-center'>
                                    <button className='text-white w-fit px-6 py-3 my-2 fle items-center rounded-3xl bg-salmon cursor-pointer font-bold' onClick={() => window.open("https://apps.apple.com/id/app/folka-buku-dongeng-anak/id6444809668?l=id", "_blank")}>Follow IG Folka
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DontMiss