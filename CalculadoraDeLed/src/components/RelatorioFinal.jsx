import './responsividade.css' // Estilos de responsividade
import './RelatorioFinal.css' // Estilos do componente
import CloseButton from './CloseButton.jsx'

const RelatorioFinal = ({ fontes = {}, rolo, totalMetros, close }) => {

    const potencias = [200, 150, 100, 72, 60, 48, 36, 24, 18]
    const metragem = Number(totalMetros) || 0
    const tamanhoRolo = Number(rolo) || 0
    const rolos = tamanhoRolo > 0 ? Math.ceil(totalMetros / tamanhoRolo) : 0

    return (
        <div id='relatorio-final'>
            <CloseButton
                id="button-closed"                
                action={(e) => {
                    e.preventDefault()
                    close(false)
                }} />
            <h1> Relatório Final de Fita Led </h1>
            <p>Rolos de {tamanhoRolo}m: {rolos} Rolos</p>
            <p>Metragem total: {metragem.toFixed(2)}m</p>
            <div>
                <h1> Relatório Final de Fontes </h1>

                 {potencias.map((potencia) => {
                    const quantidade = Number(fontes[`fonte${potencia}W`]) || 0

                    if (quantidade <= 0) {
                        return null
                    }

                    return (
                        <p key={potencia}>
                            Fontes de {potencia}W: {quantidade}
                        </p>
                    )
                })}
              
            </div>

        </div>
    )
}

export default RelatorioFinal

