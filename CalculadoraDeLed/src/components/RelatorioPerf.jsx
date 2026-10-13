const RelatorioPerf = ({perfisInteiros, perfisCortes, combinacoesSobras}) => {
  
  const inteiros = perfisInteiros
  const cortados = perfisCortes

  return (
    <div>
      <p style={{color: "white"}}> {inteiros} Barras inteiras </p>
      <p style={{color: "white"}}> {cortados} Barras para corte </p>
      <p style={{color: "white"}}> Total de barras: {inteiros + cortados}</p>
      {combinacoesSobras.length > 0 && (
        <section>
          <h3 style={{color: "white"}}>Combinações das sobras</h3>
          {combinacoesSobras.map((combinacao, index) => {
            const total = combinacao.reduce((soma, sobra) => soma + sobra, 0)

            return (
              <p style={{color: "white"}} key={index}>
                Barra de corte {index + 1}: {combinacao.map(sobra => `${sobra.toFixed(2)}m`).join(" + ")} = {total.toFixed(2)}m
              </p>
            )
          })}
        </section>
      )}
    </div>
  )
}

export default RelatorioPerf
