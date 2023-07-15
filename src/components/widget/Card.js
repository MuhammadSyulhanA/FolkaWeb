import React from 'react'
import Linkedin from "../../assets/logo_li.png"

const Card = (props) => {
    return (
        <div className='card w-[282px] h-[370px] md:w-[332px] md:h-[420px] mr-6 rounded-lg shadow-lg border-dashed border-2 border-black'>
            <div className='top flex items-center justify-center'>
                <img className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover p-2' src={props.pp} alt='img'></img>
            </div>

            <div className='bottom flex flex-col justify-center items-center p-3'>
                <div className='title font-extrabold text-xl md:text-2xl my-1 text-black text-center'>{props.name}</div>
                <div className='category text-xl md:text-2xl font-extrabold my-1 text-black text-center'>{props.position}</div>
                <img onClick={()=> window.open(props.linkedin)} className='w-[51px] h-[52px] p-2 cursor-pointer hover:scale-105 duration-200' src={Linkedin} alt='img'></img>
            </div>
        </div>
    )
}

export default Card