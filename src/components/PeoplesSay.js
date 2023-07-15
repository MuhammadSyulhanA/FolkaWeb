import React from 'react'
import ImagePeople from "../assets/image_people.png"

const PeoplesSay = () => {
    return (
        <div className='w-full h-fit bg-dark-purple'>
            <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <img className='w-full object-cover p-2' src={ImagePeople} alt='img'></img>
            </div>
        </div>
    )
}

export default PeoplesSay