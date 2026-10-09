import React from 'react'
import { useState } from 'react'
import "./TabelaPerfil.css"

const TabelaPerfil = ({ metragem }) => {

    const [valorDigitado, setValorDigitado] = useState("") //estado usado para capturar o valor digitado
    const heighPerf = Number(metragem)//constante usada para transformar o valor recebido via props em numero
    const totalPerfs = Math.floor(valorDigitado / heighPerf) //calcula quantas barras inteiras serão utilizadas
    const sobraInitial = valorDigitado % heighPerf //calcula a sobra do valor digitado
    const [linhasTabelaPerf, setLinhasTabelaPerf] = useState([]) // Lista de linhas que serão exibidas na tabela
    const [erro, setErro] = useState("") // estado utilizado para validar se há algum numero errado e retornar mensagem para usuario

    const handleKeydownPerf = (e) => {
        if (e.key === "Enter" && valorDigitado) {
            if (valorDigitado === null) {
                setErro('Expressão inválida!')
                return
            }
            // Adiciona nova linha na tabela com os cálculos
            setLinhasTabelaPerf((prev) => [
                ...prev,
                {
                    valor: valorDigitado,
                    qtdPerf: totalPerfs,
                    sobras: sobraInitial,
                },
            ])
            setValorDigitado("")
        }
    }

    const handleChangePerf = (e) => {
        setValorDigitado(e.target.value)
    }

    return (
        <div>

            <p>Perfil de {metragem.toFixed(2)}m</p>
            <div id='inputsPerfil'>
                <input
                    type="text"
                    id="entradaPerf"
                    name="metragem"
                    placeholder="metragem. Ex:1.50"
                    value={valorDigitado}
                    onChange={handleChangePerf}
                    onKeyDown={handleKeydownPerf}
                />
            </div>

            <div>
                <table id="tabela-entradas">
                    <thead>
                        <tr>
                            <th>Entradas</th>
                            <th>Barras</th>
                            <th>Sobra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {linhasTabelaPerf.map((linha, index) => (
                            <tr key={index}>
                                <td>{Number(linha.valor).toFixed(2)}m</td>
                                <td>{linha.qtdPerf}x{metragem.toFixed(2)}m</td>
                                <td>{Number(linha.sobras).toFixed(2)}m</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default TabelaPerfil
