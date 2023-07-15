import React from 'react'
import ImageBarcode from "../assets/image_barcode.png"

const DownloadNow = () => {
    return (
        <div name="tentang kita" className='w-full h-fit bg-darker-purple text-white border-b-4 border-dashed border-black'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                {/* p1 */}
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-2/4 md:flex-row my-10'>
                    <div className='flex flex-col justify-center h-full sm:mr-11'>
                        <h2 className='text-3xl md:text-5xl font-bold text-white underline decoration-salmon decoration-10'>
                             Yuk download dan <br></br>
                             coba Folka <br></br>
                             sekarang! 
                        </h2>
                        <p className='text-white text-lg md:text-2xl py-4 max-w-md'>Mulai baca cerita rakyat sambil bermain, Coba Folka di App store sekarang!</p>
                        <div>
                            <button className='text-white w-fit px-6 py-3 my-2 fle items-center rounded-3xl bg-salmon cursor-pointer font-bold' onClick={() => window.open("https://apps.apple.com/id/app/folka-buku-dongeng-anak/id6444809668?l=id", "_blank")}>Download di App Store
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <img src={ImageBarcode} alt="folka hero" className='mx-auto md:w-[560px] w-full'></img>
                        <p className='text-sm md:text-lg text-center'>Atau scan QR berikut melalui <br></br>handphone kamu ya!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadNow