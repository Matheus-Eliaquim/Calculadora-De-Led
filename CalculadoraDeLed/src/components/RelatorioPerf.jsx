import './responsividade.css' // Estilos de responsividade
import './RelatorioFinal.css' // Estilos do componente
import Button from './Button.jsx'

const RelatorioPerf = ({ perfisInteiros, perfisCortes, combinacoesSobras, close }) => {

  const inteiros = perfisInteiros
  const cortados = perfisCortes

  // Retorna a estrutura JSX que será renderizada na tela
  return (
    <div id='relatorio-final'>
      <h1> Relatório Final de Perfis </h1>
      <p> {inteiros} Barras inteiras </p>
      <p> {cortados} Barras para corte </p>
      <h4> Total de barras: {inteiros + cortados}</h4>
      {combinacoesSobras.length > 0 && (
        <section>
          <h3>Combinações das sobras</h3>
          {/* Percorre o array combinacoesSobras e renderiza cada combinação */}
          {combinacoesSobras.map((combinacao, index) => {
            const total = combinacao.reduce((soma, sobra) => soma + sobra, 0)

            // Calcula o total da soma das sobras dentro da combinação
            return (
              <p key={index}>
                {/* Mostra o número do corte e os valores das sobras formatados em metros */}
                Corte {index + 1}: {combinacao.map(sobra => `${sobra.toFixed(2)}m`).join(" + ")} = {total.toFixed(2)}m
              </p>
            )
          })}
        </section>
      )}
      <Button
        id="button-closed"
        text="Voltar"
        action={(e) => {
          e.preventDefault()
          close("tabela")
        }} />
    </div>
  )
}

export default RelatorioPerf
