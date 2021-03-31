import React from 'react'
import styles from './style.module.scss'
import { useHistory, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import Button from '../Button'
import { ShoppingCart } from 'react-feather'
import { motion } from 'framer-motion'

const Navbar = () => {
  const { push } = useHistory()
  const { pathname } = useLocation()
  const notHome = pathname !== '/'
  const isCustomOrder = pathname.includes('customOrder')
  const onCustomOrder = () => {
    push('customOrder')
  }
  return (
    <motion.div
      initial={!notHome&&{
        translateY:-500,
        opacity: 0
      }}  animate={!notHome&&{
        translateY: 0,
        opacity: 1
      }} 
      className={styles['container']}>
      <div>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
      </div>
      <div>
        {!isCustomOrder&&<Button 
          icon={<ShoppingCart 
            size={15} 
            style={{marginRight:2}} 
          />} 
          mode='outline' 
          label='Custom Order' 
          onClick={onCustomOrder}/>}
      </div>
    </motion.div>
  )
}

export default Navbar
