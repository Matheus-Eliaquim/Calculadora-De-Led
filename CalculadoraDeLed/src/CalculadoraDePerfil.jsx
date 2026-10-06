import TabelaPerfil from './components/TabelaPerfil.jsx'
import InputPerfil from "./components/InputPerfil.jsx"
import { useState } from "react"

const CalculadoraDePerfil = () => {
  
  const [relatorioPerfil, setRelatorioPerfil] = useState(false)
  const receberBoolean = (r) => setRelatorioPerfil(r)

  return (
    <div>
      {relatorioPerfil === false ? (<InputPerfil enviarRelatorio= {receberBoolean} />) : (<TabelaPerfil />)  }
    </div>

  )
}

export default CalculadoraDePerfil