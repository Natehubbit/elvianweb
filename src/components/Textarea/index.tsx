import React from 'react'
import styles from './style.module.scss'

interface TextareaProps extends React.HtmlHTMLAttributes<HTMLTextAreaElement> {

}

const Textarea: React.FC<TextareaProps> = ({
  ...props
}) => {
  return (
    <textarea
      {...props}
      className={styles['container']}
    />
  )
}

export default Textarea
