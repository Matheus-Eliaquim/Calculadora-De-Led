import React from 'react'
import {useState} from 'react'
import "./TabelaPerfil.css"

const TabelaPerfil = ({ metragem }) => {
    return (
        <div>
            <p>Perfil de {metragem.toFixed(2)}m</p>
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
