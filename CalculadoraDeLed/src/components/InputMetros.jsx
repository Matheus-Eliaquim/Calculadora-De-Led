import Button from './Button.jsx'
import TabelasVisualisacao from './TabelasVisualisacao.jsx'
import { useState, useEffect } from 'react'
import './InputMetros.css'

const InputMetros = ({ potencia, rolo, perfil, coeficiente }) => {

    const btnCalcular = (e) => {
        e.preventDefault()
    }


    const [fontePotencia, settFontePotencia] = useState("")
    const [valor, settValor] = useState("")
    const [distancia, settDistancia] = useState("")
    const [fonteQTD, settFonteQTD] = useState("")

    useEffect (() => {
        if (valor && distancia ){
            const qtd = settFonteQTD(Math.ceil(valor/distancia))              
        }
    })

    const handleKeydown = (e) => {
        if (e.key === "Enter") {
            console.log(distancia, valor, fonteQTD)
            settValor("")          
        }
    }

    const handleDist = (e) => {
        settDistancia(e.target.value)
    }


    return (
        <div className='dados-de-input'>
            <header id='dados-para-calculo'>
                <h3>Potencia da fita: {potencia}W/m</h3>
                <h3>Rolo de fita: {rolo}m</h3>
                <h3>Barra de perfil: {perfil}m</h3>
                <h3>Coeficiente de segurança: {coeficiente}%</h3>
            </header>
            <div id="metragem-individual" >
                <div id='inputs'>
                    <input type="text"
                        id='entradaValor'
                        name="metragem"
                        placeholder='digite o tamanho em metros. EX: 12,00'
                        value={valor}
                        onChange={(e) => settValor(e.target.value)}
                        onKeyDown={handleKeydown} />
                    <h4>Espaçamento por Fonte</h4>
                    <div id='radios'>
                        <label className='radio-inputs'>
                            <input type="radio"
                                value='5'
                                name='fonts'
                                checked={distancia === "5"}
                                onClick={handleDist} />
                            5m
                        </label>
                        <label className='radio-inputs'>
                            <input type="radio"
                                value='7'
                                name='fonts'
                                checked={distancia === "7"}
                                onClick={handleDist} />
                            7m
                        </label>
                        <label className='radio-inputs'>
                            <input type="radio"
                                value='1000'
                                name='fonts'
                                checked={distancia === "1000"}
                                onClick={handleDist} />
                            01 Fonte
                        </label>
                    </div>
                </div>
                <Button id='iniciar-calculo' text='Calcular' action={btnCalcular} />
            </div>

        </div>
    )
}

export default InputMetros