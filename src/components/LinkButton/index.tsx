import React, { HTMLAttributes } from 'react'
import styles from './style.module.scss'

interface ILinkButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <button 
      {...props}
      className={styles['container']}>
      {label}
    </button>
  )
}

export default LinkButton
