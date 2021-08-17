import { storage } from "../config/firebase";
import { v4 as uuid } from 'uuid'

const ImageRef = storage
  .ref('images')
  .child('description')

export default class ServerStorage {
  static createUpload(file:File){
    try {
      const task =ImageRef
        .child(uuid())
        .put(file)
      return task
    } catch (e) {
      console.log(e.message)
      return null
    }
  }
}