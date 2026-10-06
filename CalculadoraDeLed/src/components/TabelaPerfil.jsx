import React from 'react'

const TabelaPerfil = ({ metragem }) => {
    return (
        <div>
            <div id='inputsPerfil'>
                <input 
                type="text" 
                id="entradaValor" 
                name="metragem" 
                placeholder="metragem. Ex:1.50"/>
            </div>
        </div>
    )
}

export default TabelaPerfil
