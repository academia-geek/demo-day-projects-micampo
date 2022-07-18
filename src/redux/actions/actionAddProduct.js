import { addDoc, collection } from 'firebase/firestore'
import { DB } from '../../firebase/firebaseConfig'

export const addProdAsync = (pro) => {
   return async () => {
      addDoc(collection(DB, "productos"), pro)
         .then(res => console.log('Agregado'))

         .catch(err => console.log(err))
   }
}
