import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import CardList from '../../components/CardList'
import ProductService from '../../service/ProductService'
import CakeLoader from '../../components/CakeLoader'

// const cn = cx.bind(styles)

const Home: React.FC = () => {
  const { push } = useHistory()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<object[]>([])
  const hasProducts = products.length > 0
  const [info, setInfo] = useState('')
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    const res = await ProductService.getCakes()
    if (res) {
      setProducts(res)
    } else {
      setInfo('No data found')
    }
    setLoading(false)
  }
  return (
    <div className={styles['container']}>
      <Navbar />
      {info}
      {loading&&<CakeLoader/>}
      {hasProducts&&
      <>
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
          <CardList 
            data={products} 
            type='horizontal' />
        </motion.div>
      </>
      }
      <div className={styles['foot']}>
        <Button 
          onClick={()=>push('/all')} 
          label='See all cakes'  />
      </div>
    </div>
  )
}

export default Home
