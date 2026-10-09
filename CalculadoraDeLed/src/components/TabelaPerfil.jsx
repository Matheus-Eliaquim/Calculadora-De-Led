import React from 'react'
import { useState, useEffect } from 'react'
import "./TabelaPerfil.css"
import Button from "./Button.jsx"

const TabelaPerfil = ({ metragem }) => {

    const [valorDigitado, setValorDigitado] = useState("") //estado usado para capturar o valor digitado
    const heighPerf = Number(metragem)//constante usada para transformar o valor recebido via props em numero
    const totalPerfs = Math.floor(valorDigitado / heighPerf) //calcula quantas barras inteiras serão utilizadas
    const sobraInitial = Number((valorDigitado % heighPerf).toFixed(2)) //calcula a sobra do valor digitado
    const [linhasTabelaPerf, setLinhasTabelaPerf] = useState([]) // Lista de linhas que serão exibidas na tabela
    const [erro, setErro] = useState("") // estado utilizado para validar se há algum numero errado e retornar mensagem para usuario
    const [sobras, setSobras] = useState([]) //array para armazenar todas as sobras
    const [perfsSobras, setPerfsSobras] = useState(0)

    //função para disparar uma ação ao apertar enter
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
            setSobras((prev) => [...prev, sobraInitial])
            setValorDigitado("")
        }
    }

    //atualização de estado para verificar se o array está sendo armazenado com os valores corretos
    useEffect(() => {
        setPerfsSobras(calculandoSobras())
        console.log(sobras)
    }, [sobras])

    //função para capturar o valor digitado
    const handleChangePerf = (e) => {
        setValorDigitado(e.target.value)
    }

    function calculandoSobras() {
        let sobrasCopy = [...sobras].map(s => Number(s.toFixed(2)))
        let perfs = 0

        while (sobrasCopy.length > 0) {
            let soma = 0

            for (let i = 0; i < sobrasCopy.length; i++) {
                if ((soma + sobrasCopy[i]) <= heighPerf) {
                    soma += sobrasCopy[i]
                    sobrasCopy.splice(i, 1)
                    i--
                }
            }

            if (soma > 0 && soma <= heighPerf) {
                perfs++
            } else {
                break
            }
        }

        return perfs
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

                <Button
                    id="iniciar-calculo"
                    text="Calcular"
                    action={(e) => {
                        e.preventDefault()
                        calculandoSobras()
                        console.log(perfsSobras)
                    }}
                />
            </div>



        </div>
    )
}

export default TabelaPerfil
