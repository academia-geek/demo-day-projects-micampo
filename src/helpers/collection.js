import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export const collectionData = async (coleccion) => {
    const DatosCol = await getDocs(collection(db,coleccion))
    const datos = []
    DatosCol.forEach(element => {
      datos.push({ ...element.data() })
    })
    return datos
  }

export const collectionAgricultor= async()=>{
    const DatosCol = await getDocs(collection(db,'usuarios'))
    const datos = []
    DatosCol.forEach(element => {
      datos.push({ ...element.data() })
    })
    const filtrado = datos.filter(element=>element.data.type=='agricultor')
    return filtrado
  }

