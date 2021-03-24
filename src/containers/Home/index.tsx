import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import FAB from '../../components/FAB'
import styles from './style.module.scss'
import { ArrowRight } from 'react-feather'
import cx from 'classnames/bind'
import { motion } from 'framer-motion'

const cn = cx.bind(styles)

const URI = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&q=80'

const Home: React.FC = () => {
  return (
    <div className={styles['container']}>
      {/* <img className={styles['blob']} src={blob} alt='blob' /> */}
      <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1}}
        className={styles['intro']}>
        <header className={styles['head']}>
          Want a cake?
        </header>
        <span className={styles['tag']}>
          Choose your pick
        </span>
      </motion.div>
      <motion.div
        initial={{
          translateX: -1000,
        }}
        animate={{
          translateX: 0
        }}
        className={styles['cakes']}>
        <div className={styles['list']}>
          {[0,0,0,0,0,0,0]
            .map((d,i)=>{
              return <Card
                key={i}
                uri={URI}
                label='Chocolate Cake'
                price='GHS200'
              />
            })}
        </div>
        <div className={cn({
          controlBtn:true,
          right:true
        })}>
          <FAB icon={<ArrowRight />} />
        </div>
      </motion.div>
      <div className={styles['foot']}>
        <Button label='See all cakes'  />
      </div>
    </div>
  )
}

export default Home
