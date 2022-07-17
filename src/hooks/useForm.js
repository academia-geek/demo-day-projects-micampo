import React, { useState } from 'react'

const useForm = (iniState = {}) => {
   const [value, setValue] = useState(iniState);

   const reset = () => setValue(iniState);

   const handleChange = ({ target }) => setValue({
      ...value,
      [target.name]: target.value
   })

   return [value, reset, handleChange]
}

export default useForm