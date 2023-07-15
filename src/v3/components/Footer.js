import React from 'react'
import styles from '../../style'
import { logo_ig, logo_lk, logo_mail, logo_folka } from '../assets'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full justify-between flex-wrap md:mt-0 mt-10`}>
        <div className="flex-[1] flex flex-col justify-start mr-10 mb-5">
          <div className="flex flex-row">
            <img
              src={logo_folka}
              alt="hoobank"
              className="w-[64px] h-[64px]"
            />
            <div className="flex flex-col ml-4">
              <h4 className="font-nunito font-extrabold text-[20px] leading-[32px] text-black">
              Folka
              </h4>
              <p className="font-nunito font-bold text-[16px] leading-[24px] text-black">
              Bringing Folklore to Life
              </p>
            </div>
          </div>

        </div>

        <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
          <h4 className="font-nunito font-extrabold text-[18px] leading-[27px] text-black">
            Stay in touch with us!
          </h4>
          <ul className="list-none mt-4">
            <li
              className={`font-nunito font-normal text-[16px] leading-[24px] text-black hover:text-secondary cursor-pointer mb-4`}
            >
              <div className="flex flex-row">
                <img src={logo_ig} alt="ig" className="w-[30px] h-[30px]" />
                <p className="font-nunito font-bold text-[16px] leading-[26px] text-black ml-4">
                  @sahabatfolka
                </p>
              </div>
            </li>
            <li
              className={`font-nunito font-normal text-[16px] leading-[24px] text-black hover:text-secondary cursor-pointer mb-4`}
            >
              <div className="flex flex-row">
                <img src={logo_mail} alt="ig" className="w-[30px] h-[30px]" />
                <p className="font-nunito font-bold text-[16px] leading-[26px] text-black ml-4">
                  sahabatfolka@gmail.com
                </p>
              </div>

            </li>
            <li
              className={`font-nunito font-normal text-[16px] leading-[24px] text-black hover:text-secondary cursor-pointer `}
            >
              <div className="flex flex-row">
                <img src={logo_lk} alt="ig" className="w-[30px] h-[30px]" />
                <p className="font-nunito font-bold text-[16px] leading-[26px] text-black ml-4">
                  Folka
                </p>
              </div>

            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-nunito font-bold text-center text-[18px] leading-[27px] text-black">
          Copyright Ⓒ 2023 Folka. All Rights Reserved.
        </p>
      </div>
    </section>
  )
}

export default Footer