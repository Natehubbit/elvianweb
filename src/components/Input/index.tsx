import React from 'react'
import styles from './style.module.scss'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {

}

const Input:React.FC<InputProps> = ({
  ...props
}) => {
  return (
    <input
      {...props}
      className={styles['container']}
    />
  )
}

export default Input
