import { addDoc, collection } from 'firebase/firestore'
import { DB } from '../../firebase/firebaseConfig'
import { typesAddProd } from '../types/types'

export const addProdAsync = (pro) => {
   return async (dispatch) => {
      addDoc(collection(DB, "productos"), pro)
         .then(res => dispatch(addProducto(pro)))
         .catch(err => console.log(err))
   }
}

export const addProducto = (producto) => {
   return {
      type: typesAddProd.addPro,
      payload: producto
   }
}