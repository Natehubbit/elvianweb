import { IOrderForm } from "../types/forms"

export const ORDER_FORM: {
  [char:string]:any
} = {
  name:'Name',
  contact: 'Contact',
  ocassion: 'Occasion',
  email: 'Email',
  description: 'Description',
  image: ({onUpload}:{onUpload:()=>void}) => <p>
    Have an image that describes your cake? <span 
      className='link'
      onClick={onUpload}>
        Click
      </span> or drag and drop to {'\t'}
      <span 
        className='link'
        onClick={onUpload}>
        upload image
      </span>
  </p>
} as const

export const INITIAL_ORDER_VALUES: IOrderForm = {
  name: '',
  contact: '',
  description: '',
  email: '',
  ocassion: '',
  uri: ''
}