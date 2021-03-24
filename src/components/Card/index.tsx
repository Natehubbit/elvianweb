import React from 'react'
import styles from './style.module.scss'

interface ICardProps {
  uri: string,
  price: string,
  label: string;
}

const Card:React.FC<ICardProps> = ({
  uri,
  label,
  price
}) => {
  return (
    <div className={styles['container']}>
      <div 
        className={styles['image']} 
        style={{
          background:`url(${uri})`
        }}/>
      <div className={styles['info']}>
        <header className={styles['label']}>
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
