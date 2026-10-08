import TabelaPerfil from './components/TabelaPerfil.jsx'
import InputPerfil from "./components/InputPerfil.jsx"
import { useState } from "react"

const CalculadoraDePerfil = () => {
  
  const [relatorioPerfil, setRelatorioPerfil] = useState(false)
  const receberBoolean = (r) => setRelatorioPerfil(r)
  const [receberNumero, setReceberNumero] = useState('')
  const number = (r) => setReceberNumero(r)

  return (
    <div>
      {relatorioPerfil === false ? (<InputPerfil enviarRelatorio= {receberBoolean} enviarMetragem= {number} />) : (<TabelaPerfil metragem={receberNumero} />)  }
    </div>

  )
}

export default CalculadoraDePerfil