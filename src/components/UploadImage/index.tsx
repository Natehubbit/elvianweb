import React from 'react'
import styles from './style.module.scss'

interface UploadImageProps {
  placeholder: string;
}

const UploadImage: React.FC<UploadImageProps> = ({
  placeholder
}) => {
  return (
    <div className={styles['container']}>
      {placeholder}
    </div>
  )
}

export default UploadImage
