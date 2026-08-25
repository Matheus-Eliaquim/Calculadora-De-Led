import { useState, useEffect, useEffectEvent } from 'react'
import "./TabelaDeMetros.css"
import './responsividade.css'


const TabelaDeMetros = ({ valor, qtdFonte, potenciaFonte, perfil }) => {


  const perf = perfil

  const [linhas, setLinhas] = useState([]) //estado que vai armazenar todas as linhas criadas
  const [valorNovo, setValorNovo] = useState("")
  const [barrasInteiras, setBarrasInteiras] = useState(0)
  const [barrasTotais, setBarrasTotais] = useState(0)
  const [sobra, setSobra] = useState(0)

  // Função para calcular quantas barras inteiras cabem no valor e qual sobra
  const calcularBarras = (valor, perfil) => {
    const va = Number(valor)   // Converte valor para número
    const pe = Number(perfil)  // Converte perfil para número

    // Caso perfil seja inválido ou valor não seja número, zera os estados
    if (!pe || isNaN(va) || isNaN(pe)) {
      setBarrasInteiras(0)
      setSobra(0)
      return
    }

    // Calcula quantas barras inteiras podem ser utilizadas (divisão inteira)
    const inteiras = Math.floor(va / pe)
    // Calcula o resto da divisão
    const resto = va % pe

    // Atualiza os estados com os resultados
    setBarrasInteiras(inteiras)
    setSobra(resto)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addLinha()
    }
  }

  //variavel usada pra adicionar o valor das novas linhas a tabela
  const addLinha = () => {
    setLinhas((prev) => [...prev, valor, qtdFonte, potenciaFonte, perf, barrasInteiras])
  }

  //recalcula as barras sempre que valorNovo ou perf mudarem
  useEffect(() => {
    calcularBarras(valorNovo, perf)
  }, [valorNovo, perf])

  //atualiza valorNovo sempre que a prop valor mudar
  useEffect(() => {
    setValorNovo(valor)
  }, [valor])


  return (
    <div className='container'>
      {/* Exibe os valores calculados e recebidos em formato de texto */}
      <table id='tabela-entradas'>
        <tr>
          <th>Entradas</th>
          <th>Barras de {Number(perf).toFixed(2)}m</th>
          <th>Sobras</th>
          <th>Fontes</th>
        </tr>
      </table>
      <p id="valores-calculados">
        Entrada: {valor}m | Barras inteiras: {barrasInteiras}x{Number(perf).toFixed(2)}m | Sobras: {Number(sobra).toFixed(2)}m | Fontes: {qtdFonte}x{potenciaFonte}W
      </p>
    </div>
  )
}


export default TabelaDeMetros
