import { motion } from 'framer-motion'
import React from 'react'
import styles from './style.module.scss'

interface ICardProps {
  uri: string,
  price: string,
  label: string;
  onClick?: () => void;
}

const Card:React.FC<ICardProps> = ({
  uri,
  label,
  price,
  onClick,
}) => {
  return (
    <div className={styles['container']}>
      <div 
        role='button'
        onClick={onClick}
        className={styles['image']} 
        style={{
          background:`url(${uri})`
        }}/>
      <div className={styles['info']}>
        <header onClick={onClick} className={styles['label']}>
          {label}
        </header>
        <span className={styles['price']}>
          {price}
        </span>
      </div>
    </div>
  )
}

export default Card
