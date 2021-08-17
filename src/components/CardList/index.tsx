import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { useState } from "react"
import Card from "../Card"
import FAB from "../FAB"
import styles from './style.module.scss'
import { X } from 'react-feather'
import cx from 'classnames/bind'
import waves from '../../assets/images/waves.svg'

const cn = cx.bind(styles)

interface ICardListProps {
  type?: 'vertical' | 'horizontal';
  data: any[];
}

interface IShowcaseInfoProps {
  onClose: () => void;
  data: any;
}

const ShowcaseInfo: React.FC<IShowcaseInfoProps> = ({
  onClose,
  data
}) => {
  return (
    <motion.div
      className={styles['showcaseInfo']}>
      <FAB
        onClick={onClose}
        icon={<X />}
        className={styles['close']} />
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        className={styles['showcaseContent']}>
        <h1
          className={styles['header']}>
          {data.name}
        </h1>
        <p>
          {data?.description}
        </p>
      </motion.div>
      <img
        className={styles['waves']}
        src={waves} alt='waves' />
    </motion.div>
  )
}

const CardList: React.FC<ICardListProps> = ({
  type,
  data
}) => {
  const [activeData, setActiveData] = useState<any | null>(null)
  const onClick = (id: string | null) => {
    const selected = data.find(d => d.id === id)
    setActiveData(selected)
  }
  return (
    <motion.div className={cn({
      container: true,
      all: type === 'vertical'
    })}>
      <AnimateSharedLayout type='crossfade'>
        <motion.div className={cn({
          list: true,
          all: type === 'vertical'
        })}>
          {data
            .map((d, i) => {
              return <motion.div layoutId={d.id}>
                <Card
                  key={d.id}
                  uri={d.image}
                  label={d.name}
                  price={`GHS${d.price}`}
                  onClick={() => onClick(d.id)}
                />
              </motion.div>
            })}
        </motion.div>
        <AnimatePresence>
          {activeData && <motion.div
            layoutId={activeData.id}
            className={styles['showcase']}
          >
            <motion.div
              className={styles['showcaseImg']}
            // style={{
            //   background:`url(${activeData.image})`
            // }} 
            >
              <img
                src={activeData.image}
                alt={activeData.name} />
            </motion.div>
            <ShowcaseInfo
              data={activeData}
              onClose={() => onClick(null)} />
          </motion.div>}
        </AnimatePresence>
      </AnimateSharedLayout>
    </motion.div>
  )
}

export default CardList