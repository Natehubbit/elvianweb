import React, { HTMLAttributes, ReactNode } from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'

interface IFABProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string|ReactNode;
}

const FAB: React.FC<IFABProps> = ({
  icon
}) => {
  return (
    <motion.button
      initial={{
        opacity: 0
      }} 
      animate={{
        opacity: 1
      }}
      whileHover={{scale:1.05}}
      className={styles['container']}>
      {icon}
    </motion.button>
  )
}

export default FAB
