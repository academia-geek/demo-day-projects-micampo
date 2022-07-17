import { typesAddProd } from "../types/types"

const iniState = {
   productos: []
}

export const addProReducer = (state = iniState, action) => {
   switch (action.type) {
      case typesAddProd.addPro:
         return {
            productos: [...action.payload]
         }

      default:
         return state
   }
}