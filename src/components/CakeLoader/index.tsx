import React from 'react'
import styles from './style.module.scss'
import Lottie from 'react-lottie';
import CakeAnimation from '../../assets/animation/cakeload.json'

const CakeLoader = () => {
  return (
    <div className={styles['container']}>
      <Lottie
        height={200}
        options={{
          animationData: CakeAnimation,
          autoplay: true,
          loop: true,
        }}
      />
    </div>
  )
}

export default CakeLoader
