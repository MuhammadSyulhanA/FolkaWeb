import React from 'react'
import Card from './Card'
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import Step from "../../assets/pp_step.png"
import Rara from "../../assets/pp_rara.png"
import Putri from "../../assets/pp_putri.png"
import Agil from "../../assets/pp_agil.png"
import Feri from "../../assets/pp_feri.png"
import Sulhan from "../../assets/pp_han.png"

const CarouselProfile = () => {
    // const scrollLeft = () => {
    //     document.getElementById("content").scrollLeft -= 100;
    // }

    // const scrollRight = () => {
    //     document.getElementById("content").scrollLeft += 100;
    // }

    const dataProfile = [
        {
            id: 1,
            img: Step,
            name: "Steffani Sylvia Tan",
            position: ["Project Manager/",
                <br />,
                "Founder"],
            linkedin: "https://www.linkedin.com/in/steffanisylviatan/"
        },
        {
            id: 2,
            img: Rara,
            name: "Soraya Andini",
            position: ["UI/UX Designer/",
                <br />,
                "Founder"],
            linkedin: "https://www.linkedin.com/in/sorayaandini/"
        },
        {
            id: 3,
            img: Putri,
            name: "Putri Rahmadewi",
            position: ["iOS Developer/",
                <br />,
                "Founder"],
            linkedin: "https://www.linkedin.com/in/putrirahmadewi/"
        },
        {
            id: 4,
            img: Feri,
            name: "Ferry Julian",
            position: ["iOS Developer/",
                <br />,
                "Founder"],
            linkedin: "https://www.linkedin.com/in/ferryjulian/"
        },
        {
            id: 5,
            img: Sulhan,
            name: "M. Syulhan Al Ghofany",
            position: ["iOS Developer/",
                <br />,
                "Founder"],
            linkedin: "https://www.linkedin.com/in/muhammad-syulhan/"
        },
        {
            id: 6,
            img: Agil,
            name: "Agil Sulapohan Suaga",
            position: ["Illustrator/",
                <br />,
                "Founder"],
            linkedin: "https://www.linkedin.com/in/agil-sulapohan/"
        },
    ]

    return (
        <div name="contact" className='w-full h-fit text-white' style={{backgroundImage: "url(/img/bg_profile.png)"}}>
            <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=''>
                    <div className='py-4 text-2xl md:text-4xl text-black font-black'>Kontak kita untuk kolaborasi yuk!</div>
                    {/* <div className='absolute right-0 top-5'>
                        <button onClick={scrollLeft} className='p-2 m-2 rounded-full bg-black'>
                            <BsChevronLeft style={{ color: 'white' }}></BsChevronLeft>
                        </button>
                        <button onClick={scrollRight} className='p-2 m-2 rounded-full bg-black'>
                            <BsChevronRight style={{ color: 'white' }}></BsChevronRight>
                        </button>
                    </div> */}
                    <div id='content' className='carousel flex items-center justify-start overflow-x-auto scrollbar-hide'>
                        {
                            dataProfile.map((item) => (
                                <div>
                                    <Card pp={item.img} name={item.name} position={item.position} linkedin={item.linkedin}></Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselProfile