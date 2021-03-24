import React, { ReactNode } from 'react'
import styles from './style.module.scss'
import cx from 'classnames/bind'
import { motion } from 'framer-motion'

const cn = cx.bind(styles) 

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: 'solid'|'outline';
  icon?: ReactNode;
}

const Button:React.FC<IButtonProps> = ({
  label,
  type,
  icon
}) => {
  const isOutline = type === 'outline'
  return (
    <motion.button 
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
