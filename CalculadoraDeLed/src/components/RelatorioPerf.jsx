import {useState} from 'react'

const RelatorioPerf = ({perfisInteiros, perfisCortes}) => {
  
  const inteiros = perfisInteiros
  const cortados = perfisCortes

  return (
    <div>
      <p style={{color: "white"}}> {inteiros} Barras inteiras </p>
      <p style={{color: "white"}}> {cortados} Barras para corte </p>
      <p style={{color: "white"}}> Total de barras: {inteiros + cortados}</p>      
    </div>
  )
}

export default RelatorioPerf
