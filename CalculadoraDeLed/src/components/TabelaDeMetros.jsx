const TabelaDeMetros = ({valor, qtdFonte, potenciaFonte, perfil}) => {
const perf = perfil

  return (
    <div>
      <p>{valor} | 1x{perf} | 2.00m | {qtdFonte}x{potenciaFonte}W</p>        
    </div>
  )
}

export default TabelaDeMetros