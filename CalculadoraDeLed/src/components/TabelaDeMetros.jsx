import { useState, useEffect, useEffectEvent } from 'react'

const TabelaDeMetros = ({ valor, qtdFonte, potenciaFonte, perfil }) => {

  const perf = perfil
  const [valorNovo, setValorNovo] = useState("")
  const [barrasInteiras, setBarrasInteiras] = useState(0)
  const [barrasTotais, setBarrasTotais] = useState(0)
  const [sobra, setSobra] = useState(0)

  const calcularBarras = (valor, perfil) => {
    const va = Number(valor)
    const pe = Number(perfil)

    if (!pe || isNaN(va) || isNaN(pe)) {
      setBarrasInteiras(0)
      setSobra(0)
      return
    }

    const inteiras = Math.floor(va / pe)
    const resto = va % pe

    setBarrasInteiras(inteiras)
    setSobra(resto)
  }

  useEffect(() => {
    calcularBarras(valorNovo, perf)
  }, [valorNovo, perf])



  return (
    <div>
      <p>{valor} | {barrasInteiras}x{perf} | {sobra} | {qtdFonte}x{potenciaFonte}W</p>
    </div>
  )
}

export default TabelaDeMetros