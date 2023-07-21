import React from 'react'
import {HeaderAbout, About} from './../components'
import styles from './../../style';

const AllAbout = () => {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexStart}`} style={{ backgroundImage: "url(/img/bg_about.png)" }}>
          <div className={`${styles.boxWidth}`}>
            <HeaderAbout></HeaderAbout>
            <About></About>
          </div>
        </div>
    </div>
  )
}

export default AllAbout