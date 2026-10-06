import InputPerfil from "./components/InputPerfil.jsx"
import { useState } from "react"

const CalculadoraDePerfil = () => {
  const [relatorioPerfil, setRelatorioPerfil] = useState(false)


  return (
    <div>
      <InputPerfil />
    </div>

  )
}

export default CalculadoraDePerfil