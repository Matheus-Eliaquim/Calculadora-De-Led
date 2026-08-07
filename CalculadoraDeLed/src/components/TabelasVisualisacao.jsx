const TabelasVisualisacao = ({metragem, tamanhoBarra, fontesPotencia, fonteQTD, action}) => {
  return (
    <div>
        <p>{metragem}m - {barrasQTD}x{tamanhoBarra}m - {sobras}m - {fonteQTD}x{fontesPotencia} </p>
    </div>
  )
}

export default TabelasVisualisacao