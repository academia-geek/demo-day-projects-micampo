export const imgUpload = async (file) => {

   const url = "https://api.cloudinary.com/v1_1/villalbad10/upload"

   const formData = new FormData();
   formData.append("upload_preset", "micampo");
   formData.append("file", file);

   const resp = await fetch(url, {
      method: "POST",
      body: formData
   })
   const data = await resp.json();
   console.log(data)

   return data.secure_url

}