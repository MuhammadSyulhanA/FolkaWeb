import React from 'react'

const Button = ({ styles, text, link }) => {
  return (
    <button type='button' onClick={() => window.open(link, "_blank")} className={`bg-salmon font-nunito text-white outline-none ${styles} rounded-[100px] font-extrabold`}>
      {text}
    </button>
  )
}

export default Button