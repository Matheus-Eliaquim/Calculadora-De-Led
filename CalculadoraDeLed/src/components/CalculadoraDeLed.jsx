import DadosEntrada from './DadosDeEntrada.jsx'
import InputMetros from './InputMetros.jsx'
import RelatorioFinal from './RelatorioFinal.jsx'
import { useState } from 'react'



function CalculadoraDeLed({back}) {
  const [potencia, settPotencia] = useState(0)
  const [rolo, settRolo] = useState(0)
  const [perfil, settPerfil] = useState(0)
  const [coeficiente, settCoeficiente] = useState(0)
  const [totalMetros, setTotalMetros] = useState(0)
  const [totalFontes, setTotalFontes] = useState([])
  const invalid = [potencia, rolo, perfil, coeficiente].some(v => Number(v) > 0)
  const [verRelatorio, setVerRelatorio] = useState(false)

  const receberDados = ({ potencia, rolo, perfil, coeficiente }) => {
    settPotencia(Number(potencia));
    settRolo(Number(rolo));
    settPerfil(Number(perfil));
    settCoeficiente(Number(coeficiente));
  }

  const receberRelatorio = ({ totalMetros, fontes, abrirRelatorio }) => {
    console.log("o relatorio é" + abrirRelatorio)
    setTotalMetros(totalMetros)
    setTotalFontes(fontes)
    setVerRelatorio(Boolean(abrirRelatorio))
    console.log("o relatorio é" + abrirRelatorio)
  }


  return (
    <div>
        {!invalid ? (
            <DadosEntrada
                entradaDados={receberDados}
                back = {back}
            />
        ) : (
            <>
                <div
                    style={{
                        display: verRelatorio ? 'none' : 'block'
                    }}
                >
                    <InputMetros
                        id="input-metros"
                        potencia={potencia}
                        rolo={rolo}
                        perfil={perfil}
                        coeficiente={coeficiente}
                        receberRelatorio={receberRelatorio}
                        back = {back}
                    />
                </div>

                {verRelatorio && (
                    <RelatorioFinal
                        fontes={totalFontes}
                        rolo={rolo}
                        totalMetros={totalMetros}
                        close={setVerRelatorio}
                        back = {back}
                    />
                )}
            </>
        )}
    </div>
  )

}

export default CalculadoraDeLed
