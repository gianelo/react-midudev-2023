import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log("Efecto")
  })
  
  return (
    <>
      <h3>Proyecto 3</h3>
      <button>Activar seguir puntero</button>
    </>
  )
}

export default App;
