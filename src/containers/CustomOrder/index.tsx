import React from 'react'
import Navbar from '../../components/Navbar'
import styles from './style.module.scss'
import blob from '../../assets/images/blob.svg'
import sideBack from '../../assets/images/sideBack.svg'
import Input from '../../components/Input'
import { ORDER_FORM } from '../../common/constants'
import Button from '../../components/Button'
import { v4 as uuid } from 'uuid'
import Textarea from '../../components/Textarea'
import UploadImage from '../../components/UploadImage'

const CustomOrder = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <Navbar />
        <div className={styles['form']}>
          <img
            className={styles['blob']} 
            alt='blob' 
            src={blob} />
          <div className={styles['formInputs']}>
            <h1>Custom Order</h1>
            <>
              {Object
                .keys(ORDER_FORM)
                  .map((k: keyof typeof ORDER_FORM)=> {
                    if (k==='description') {
                      return <Textarea placeholder={ORDER_FORM[k]} />
                    }
                    if (k==='image') {
                      return <UploadImage placeholder={ORDER_FORM[k]} />
                    }
                    return <Input key={uuid()} placeholder={ORDER_FORM[k]} />}
                  )}
            </>
            <div>
              <Button label='Delivery Mode' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['side']}>
        <img
          className={styles['sideBack']} 
          alt='side-background' 
          src={sideBack} />
      </div>
    </div>
  )
}

export default CustomOrder
