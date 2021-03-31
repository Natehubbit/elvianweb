import React, { ReactNode } from 'react'
import styles from './style.module.scss'
import cx from 'classnames/bind'
import { HTMLMotionProps, motion } from 'framer-motion'

const cn = cx.bind(styles) 

interface IButtonProps extends HTMLMotionProps<'button'> {
  label: string;
  mode?: 'solid'|'outline';
  icon?: ReactNode;
}

const Button:React.FC<IButtonProps> = ({
  label,
  mode,
  icon,
  ...props
}) => {
  const isOutline = mode === 'outline'
  return (
    <motion.button 
      {...props}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      whileHover={{scale: 1.05}}
      className={cn({
        container:true,
        outline:isOutline,
      })}>
      {icon&&icon}
      {label}
    </motion.button>
  )
}

export default Button
