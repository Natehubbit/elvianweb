import React, { ReactNode } from 'react'
import styles from './style.module.scss'
import { HTMLMotionProps, motion } from 'framer-motion'
import cn from 'classnames'

interface IFABProps extends HTMLMotionProps<"button"> {
  icon: string|ReactNode;
}

const FAB: React.FC<IFABProps> = ({
  icon,
  className,
  ...props
}) => {
  return (
    <motion.button
      {...props}
      initial={{
        opacity: 0
      }} 
      animate={{
        opacity: 1
      }}
      whileHover={{scale:1.05}}
      className={cn(styles['container'],className)}>
      {icon}
    </motion.button>
  )
}

export default FAB
