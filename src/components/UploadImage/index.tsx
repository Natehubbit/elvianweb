import React, { ChangeEvent, DragEvent, useRef, useState } from 'react'
import styles from './style.module.scss'
import cx from 'classnames/bind'
import useUploadHook from '../../hooks/useUploadHook'
import Button from '../Button'
import LinkButton from '../LinkButton'

const cn = cx.bind(styles)

interface UploadImageProps {
  placeholder: React.FC<{onUpload:()=>void}>;
}

const UploadImage: React.FC<UploadImageProps> = ({
  placeholder: Body
}) => {
  const [addUpload,onCancel,clearUpload,progress,showProgress,uri] = useUploadHook()
  const [dragOver, setDraggedOver] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const onUploadFile = () => {
    fileRef.current && 
      fileRef.current.click()
  }
  const onDropFile = (e:DragEvent<HTMLDivElement>) => {
    const {
      dataTransfer: {
        files
      }
    } = e
    e.preventDefault()
    setDraggedOver(false)
    addUpload(files[0])
  }
  const onDragOver = (e:DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDraggedOver(true)
  }
  const onDragExit = (e:DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDraggedOver(false)
  }
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        files
      }
    } = e
    files&&addUpload(files[0])
  }
  const onClear = () => {
    clearUpload()
  }
  return (
    <div 
      className={cn({
        container: true,
        dragOver
      })}
      onDrop={onDropFile}
      onDragOver={onDragOver}
      onDragLeave={onDragExit}>
      <input onChange={onChange} ref={fileRef} type='file' className={styles['input']} />
      {!!!uri&&<Body onUpload={onUploadFile} />}
      {!!uri&&<>
        <img 
          src={uri} 
          alt='uploaded' 
          className={styles['img']}/>
          <LinkButton onClick={onClear} label='clear'/>
      </>}
      {showProgress&&<div>
        <p>{progress}%</p>
        <Button 
          label='Cancel' 
          mode='outline' 
          onClick={onCancel} />
      </div>}
    </div>
  )
}

export default UploadImage
