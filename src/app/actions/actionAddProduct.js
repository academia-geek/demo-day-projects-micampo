import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

export const addProdAsync = (pro) => {
   return async () => {
      addDoc(collection(db, "productos"), pro)
         .then(res => console.log('Agregado'))

         .catch(err => console.log(err))
   }
}


export const listarPro = async () => {
   const collectionData = await getDocs(collection(db, "productos"));
   const datos = []
   collectionData.forEach(element => {
      datos.push({ ...element.data() })
   });

   return datos
}
