import { useEffect, useState } from 'react'
import CakeLoader from '../../components/CakeLoader'
import CardList from '../../components/CardList'
import Navbar from '../../components/Navbar'
import ProductService from '../../service/ProductService'
import styles from './style.module.scss'

const Cakes = () => {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState('')
  const hasProducts = products.length > 0
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
      {hasProducts&&<CardList 
        data={products} 
        type='vertical' />}
    </div>
  )
}

export default Cakes
