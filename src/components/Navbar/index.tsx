import React from 'react'
import styles from './style.module.scss'
import logo from '../../assets/images/logo.svg'
import Button from '../Button'
import { ShoppingCart } from 'react-feather'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className={styles['container']}>
      <motion.div initial={{
          translateY:-500,
          opacity: 0
        }}  animate={{
          translateY: 0,
          opacity: 1
        }}>
        <img src={logo} alt='logo' />
      </motion.div>
      <motion.div initial={{
          translateY:-500,
          opacity: 0,
        }}  animate={{
          translateY: 0,
          opacity: 1,
          dur: 5000
        }}>
        <Button 
          icon={<ShoppingCart 
              size={15} 
              style={{marginRight:2}} 
            />} 
            type='outline' 
            label='Custom Order' />
      </motion.div>
    </div>
  )
}

export default Navbar
