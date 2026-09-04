import './responsividade.css' // Estilos de responsividade
import './RelatorioFinal.css' // Estilos do componente

const RelatorioFinal = ({ fontes, rolo, totalMetros }) => {

    const fontesValidas = Object.entries(fontes).filter(([_, qtd]) => qtd > 0)
    const fonte200 = fontes.fonte200W
    const fonte150 = fontes.fonte150W
    const fonte100 = fontes.fonte100W
    const fonte72 = fontes.fonte72W
    const fonte60 = fontes.fonte60W
    const fonte48 = fontes.fonte48W
    const fonte36 = fontes.fonte36W
    const fonte24 = fontes.fonte24W


    return (
        <div id='relatorio-final'>
            <p>Fontes: {fontes.fonte200W}</p>
            <p>Rolos: {Math.ceil(totalMetros / rolo)} Rolos</p>
            <p>Metragem total: {totalMetros}</p>

           
        </div>
    )
}

export default RelatorioFinal

