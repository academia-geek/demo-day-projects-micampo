import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

export const addProdAsync = (pro) => {
   return async () => {
      addDoc(collection(db, "productos"), pro)
         .then(res => console.log('Agregado'))

         .catch(err => console.log(err))
   }
}
