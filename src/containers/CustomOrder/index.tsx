import Navbar from '../../components/Navbar'
import styles from './style.module.scss'
import blob from '../../assets/images/blob.svg'
import sideBack from '../../assets/images/sideBack.svg'
import Input from '../../components/Input'
import { INITIAL_ORDER_VALUES, ORDER_FORM } from '../../common/constants'
import Button from '../../components/Button'
import { v4 as uuid } from 'uuid'
import { Formik, FormikErrors } from 'formik'
import Textarea from '../../components/Textarea'
import UploadImage from '../../components/UploadImage'
import { IOrderForm } from '../../types/forms'
import UtilService from '../../service/UtilService'

const CustomOrder = () => {
  const validateForm = (values:IOrderForm) => {
    const errors: FormikErrors<IOrderForm> = {}
  }
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
            <Formik
              initialValues={INITIAL_ORDER_VALUES}
              validate={UtilService.orderFormValidate}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <>
                  {Object
                    .keys(ORDER_FORM)
                    .map((k) => {
                      if (k === 'description') {
                        return <Textarea key={uuid()} placeholder={ORDER_FORM[k]} />
                      } else if (k === 'image') {
                        return <UploadImage key={uuid()} placeholder={ORDER_FORM[k]} />
                      } else {
                        return <Input key={uuid()} placeholder={ORDER_FORM[k]} />
                      }
                    })}
                </>
              )}
            </Formik>
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
