import InputPerfil from "./components/InputPerfil.jsx"
import { useState } from "react"

const CalculadoraDePerfil = () => {
  
  const [relatorioPerfil, setRelatorioPerfil] = useState(false)
  const receberBoolean = (relatorio) => setRelatorioPerfil(false)

  return (
    <div>
      {relatorioPerfil === false ? (<InputPerfil enviarRelatorio= {receberBoolean} />) : (<p>aa</p>)  }
    </div>

  )
}

export default CalculadoraDePerfil