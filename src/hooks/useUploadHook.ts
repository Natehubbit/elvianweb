import { useEffect, useRef, useState } from 'react'
import firebase from 'firebase/app'
import { TaskEvent } from '../config/firebase'
import ServerStorage from '../service/ServerStorage'


const useUploadHook = () => {
  const [uploadHook, setUploadHook] = useState<firebase.storage.UploadTask|null>(null)
  const [progress, setProgress] = useState(0)
  const [showProgress, setShowProgress] = useState<boolean>(false)
  const [uploadUri, setUploadUri] = useState<string|null>(null)
  let subscribe = useRef<Function|null>(null)
  useEffect(() => {
    console.log(progress)
  }, [progress])
  useEffect(() => {
    startUpload()
    return () => subscribe.current 
      && subscribe.current()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadHook])
  const startUpload = () => {
    if (uploadHook) {
      setShowProgress(true)
      subscribe.current = uploadHook.on(
        TaskEvent.STATE_CHANGED,
        onNext,
        onError,
        onComplete,
      )
    }
  }
  const clearUpload = () => {
    setUploadHook(null)
    setProgress(0)
    setShowProgress(false)
    setUploadUri(null)
    subscribe.current=null
  }
  const addUpload = (file: File) => {
    const hook = ServerStorage.createUpload(file)
    setUploadHook(hook)
  }
  const onCancel = () => {
    if(uploadHook) {
      uploadHook.cancel()
    }
  }
  const onNext = (snapshot:firebase.storage.UploadTaskSnapshot) => {
    const {
      bytesTransferred,
      totalBytes
    } = snapshot
    setProgress(Math.ceil(bytesTransferred/totalBytes*100))
  }
  const onComplete = async (unsubscribe?: firebase.Unsubscribe) => {
    subscribe.current &&
      subscribe.current()
    setShowProgress(false)
    const uri = uploadHook && await uploadHook.snapshot.ref.getDownloadURL()
    uri&&setUploadUri(uri)
    unsubscribe && unsubscribe()
  }
  const onError = (e:firebase.storage.FirebaseStorageError) => {
    const { code } = e
    const cancelled = code.includes('cancel')
    !cancelled && alert('An Error Occured')
    subscribe.current &&
      subscribe.current()
      setShowProgress(false)
    setProgress(0)
  }
  return [
    addUpload,
    onCancel,
    clearUpload,
    progress,
    showProgress,
    uploadUri
  ] as const
}

export default useUploadHook
