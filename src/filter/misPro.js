export const misPro = (data, uid) => {
   const datos = data.filter(pro => pro.user == uid);
   return datos;
}