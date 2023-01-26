import React from "react"

function useLocalStorage (nombreTarea, initialValue){

    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [tarea, setTarea] = React.useState(initialValue)


    React.useEffect(() => {
        setTimeout(() => {

          try {
            const localStorageTarea= localStorage.getItem(nombreTarea)
            let parsedTarea

            if (!localStorageTarea){

            localStorage.setItem(nombreTarea, JSON.stringify(initialValue))
            parsedTarea= initialValue
            } 
          
            else {

            parsedTarea= JSON.parse(localStorageTarea)
            }
            setTarea(parsedTarea)
            setLoading(false)

          } catch (error){
            setError(error)
          } 
        }, 2000);
    })

  
  const guardarTarea = (newTarea) => {
   try {
      const stringifiedTarea= JSON.stringify(newTarea)
      localStorage.setItem(nombreTarea, stringifiedTarea)
      setTarea(newTarea)

   } catch(error){
     setError(error)
   }
  }

   return{
    tarea,
    guardarTarea,
    loading,
    error
   }
}

export { useLocalStorage }