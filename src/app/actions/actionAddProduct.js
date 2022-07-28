import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
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


export const deletePro = (nombre) => {
   return async () => {
      const collectionPro = collection(db, "productos")
      const q = query(collectionPro, where("nombre", "==", nombre))

      const datosQ = await getDocs(q)
      //console.log(datosQ)

      datosQ.forEach(docu => {
         deleteDoc(doc(db, "productos", docu.id))
      })
   }
}

export const editProd = (nuevaPro) => {
   return async (dispatch) => {
      const collectionCitas = collection(db, "productos")
      const q = query(collectionCitas, where("email", "==", nuevaPro.email))
      const datosQ = await getDocs(q)
      let id = ''

      datosQ.forEach(async (docu) => {
         id = docu.id
      })

      console.log(id)

      const docRef = doc(db, "productos", id)

      await updateDoc(docRef, nuevaCita)
         .then(resp => console.log('editado'))
         .catch(error => console.log(error))
   }
}
