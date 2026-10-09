import { useState } from "react"
import TabelaPerfil from './components/TabelaPerfil.jsx'
import InputPerfil from "./components/InputPerfil.jsx"
import RelatorioPerf from './components/RelatorioPerf.jsx'

const CalculadoraDePerfil = () => {
  const [openPerfil, setOpenPerfil] = useState("input")
  const [receberNumero, setReceberNumero] = useState(0)
  const [barrasInteiras, setBarrasInteiras] = useState(0)
  const [barrasCortadas, setBarrasCortadas] = useState(0)

  const mudarTela = (tela) => setOpenPerfil(tela)
  const number = (valor) => setReceberNumero(valor)
  const barrasI = (barras) => setBarrasInteiras(barras)
  const barrasC = (barras) => setBarrasCortadas(barras)

  return (
    <div>
      {openPerfil === "relatorio" && (
        <RelatorioPerf perfisInteiros={barrasInteiras} perfisCortes= {barrasCortadas} />
      )}

      {openPerfil === "input" && (
        <InputPerfil 
          enviarRelatorio={mudarTela} 
          enviarMetragem={number} 
        />
      )}

      {openPerfil === "tabela" && (
        <TabelaPerfil 
          metragem={receberNumero} 
          enviarTrue={mudarTela} 
          barrasInteiras={barrasI}
          barrasCortes={barrasC}
        />
      )}
    </div>
  )
}

export default CalculadoraDePerfil
