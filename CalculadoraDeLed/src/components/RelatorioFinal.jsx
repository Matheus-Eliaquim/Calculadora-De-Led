import './responsividade.css' // Estilos de responsividade
import './RelatorioFinal.css' // Estilos do componente

const RelatorioFinal = ({ fontes, rolo, totalMetros }) => {

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
            <div>
                {fonte200 > 0 && (<p style={{display: "block"}}> Fontes de 200W: {fonte200}-Un.</p>)}
                {fonte150 > 0 && (<p style={{display: "block"}}> Fontes de 150W: {fonte150}-Un.</p>)}
                {fonte100 > 0 && (<p style={{display: "block"}}> Fontes de 100W: {fonte100}-Un.</p>)}
                {fonte72 > 0 && (<p style={{display: "block"}}> Fontes de 72W: {fonte72}-Un.</p>)}
                {fonte60 > 0 && (<p style={{display: "block"}}> Fontes de 60W: {fonte60}-Un.</p>)}
                {fonte48 > 0 && (<p style={{display: "block"}}> Fontes de 48W: {fonte48}-Un.</p>)}
                {fonte36 > 0 && (<p style={{display: "block"}}> Fontes de 36W: {fonte36}-Un.</p>)}
                {fonte24 > 0 && (<p style={{display: "block"}}> Fontes de 24W: {fonte24}-Un.</p>)}
            </div>
            <p>Rolos de {rolo}m: {(Math.ceil(totalMetros / rolo).toFixed(2))} Rolos</p>
            <p>Metragem total: {totalMetros}m</p>
        </div>
    )
}

export default RelatorioFinal

