import React from 'react'
import { useState } from 'react'
import './InputMetros.css' // Estilos específicos para este componente
import './responsividade.css' // Estilos de responsividade
import Button from "./buttons/Button.jsx"
import HomeButton from './buttons/HomeButton.jsx'

//importando componentes do Material UI
import Tooltip from '@mui/material/Tooltip'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const InputPerf = ({ metragem, enviarTrue, barrasInteiras, barrasCortes, enviarCombinacoes, back }) => {

    const [valorDigitado, setValorDigitado] = useState("") //estado usado para capturar o valor digitado
    const heighPerf = Number(metragem)//constante usada para transformar o valor recebido via props em numero
    const totalPerfs = Math.floor(valorDigitado / heighPerf) //calcula quantas barras inteiras serão utilizadas
    const sobraInitial = Number((valorDigitado % heighPerf).toFixed(2)) //calcula a sobra do valor digitado
    const [linhasTabelaPerf, setLinhasTabelaPerf] = useState([]) // Lista de linhas que serão exibidas na tabela
    const [erroPerf2, setErroPerf2] = useState("") // estado utilizado para validar se há algum numero errado e retornar mensagem para usuario
    const [sobras, setSobras] = useState([]) //array para armazenar todas as sobras
    const [perfilInteriros, setPerfisInteiros] = useState(0)


    //função para disparar uma ação ao apertar enter
    const handleKeydownPerf = (e) => {
        if (e.key !== "Enter" || !valorDigitado) return

        const valor = valorDigitado.trim()

        // Verifica se existe multiplicação
        if (valor.includes('*')) {

            const partes = valor.split('*')

            // A expressão precisa ter exatamente duas partes
            if (partes.length !== 2) {
                setErroPerf2('Expressão inválida!')
                return
            }

            const quantidade = Number(partes[0])
            const medida = Number(partes[1])

            // Verifica se os valores são números válidos
            if (
                !Number.isFinite(quantidade) ||
                !Number.isFinite(medida) ||
                quantidade <= 0 ||
                medida <= 0
            ) {
                setErroPerf2('Expressão inválida!')
                return
            }

            // A quantidade precisa ser um número inteiro
            if (!Number.isInteger(quantidade)) {
                setErroPerf2('Expressão inválida!')
                return
            }

            // Cria as novas linhas
            const novasLinhas = Array.from(
                { length: quantidade },
                () => ({
                    valor: medida,
                    qtdPerf: Math.floor(medida / heighPerf),
                    sobras: Number((medida % heighPerf).toFixed(2)),
                })
            )

            // Adiciona as novas linhas à tabela
            setLinhasTabelaPerf((prev) => [
                ...prev,
                ...novasLinhas
            ])

            // Soma a quantidade de perfis inteiros
            const novosPerfisInteiros = novasLinhas.reduce(
                (total, linha) => total + linha.qtdPerf,
                0
            )

            setPerfisInteiros(
                (prev) => prev + novosPerfisInteiros
            )

            // Adiciona cada sobra individualmente
            setSobras((prev) => [
                ...prev,
                ...novasLinhas.map(linha => linha.sobras)
            ])

            // Limpa o input e a mensagem
            setValorDigitado("")
            setErroPerf2("")

            return
        }

        // Entrada sem multiplicação

        const valorNumerico = Number(valor)

        // Verifica se é um número válido
        if (!Number.isFinite(valorNumerico) || valorNumerico <= 0) {
            setErroPerf2('Expressão inválida!')
            return
        }

        const qtdPerf = Math.floor(valorNumerico / heighPerf)

        const sobra = Number(
            (valorNumerico % heighPerf).toFixed(2)
        )

        setLinhasTabelaPerf((prev) => [
            ...prev,
            {
                valor: valorNumerico,
                qtdPerf: qtdPerf,
                sobras: sobra,
            },
        ])

        setPerfisInteiros(
            (prev) => prev + qtdPerf
        )

        setSobras((prev) => [
            ...prev,
            sobra
        ])

        setValorDigitado("")
        setErroPerf2("")
    }

    //função para capturar o valor digitado
    const handleChangePerf = (e) => {

        const input = e.target.value

        // Vírgula não é aceita como separador decimal
        if (input.includes(',')) {
            setErroPerf2('Valor inválido!')
            return
        }

        // Permite números e ponto
        const caracteresPermitidos = /^[0-9.*]*$/

        // Bloqueia caracteres não permitidos
        if (!caracteresPermitidos.test(input)) {
            setErroPerf2('Valor inválido!')
            return
        }

        // Atualiza o valor do input
        setValorDigitado(input)

        // Remove mensagens de erro
        setErroPerf2('')
    }

    function calculandoSobras() {
        // Define o limite máximo permitido (altura do perfil em centímetros).
        // Multiplica por 100 para trabalhar com inteiros e evitar problemas de precisão com decimais.
        const limite = Math.round(heighPerf * 100)

        // Cria uma cópia do array de sobras:
        // - Multiplica cada sobra por 100 e arredonda para inteiro.
        // - Filtra apenas valores positivos (descarta sobras nulas ou negativas).
        const sobrasCopy = sobras
            .map(sobra => Math.round(sobra * 100))
            .filter(sobra => sobra > 0)

        // Array que vai armazenar todas as combinações encontradas
        const combinacoes = []

        // Enquanto ainda houver sobras disponíveis para combinar
        while (sobrasCopy.length > 0) {
            let soma = 0               // Acumulador da soma da combinação atual
            const combinacao = []      // Array para guardar os elementos da combinação

            // Percorre as sobras disponíveis
            for (let i = 0; i < sobrasCopy.length; i++) {
                // Se adicionar a sobra atual não ultrapassar o limite
                if (soma + sobrasCopy[i] <= limite) {
                    // Atualiza a soma
                    soma += sobrasCopy[i]

                    // Remove a sobra do array original e adiciona na combinação
                    combinacao.push(sobrasCopy.splice(i, 1)[0])

                    // Como o array foi modificado (um item removido), decrementa o índice
                    // para não pular o próximo elemento
                    i--
                }
            }

            // Se não conseguiu formar nenhuma combinação, interrompe o loop
            if (combinacao.length === 0) break

            // Adiciona a combinação encontrada ao array de combinações
            // Convertendo novamente para metros (dividindo por 100)
            combinacoes.push(combinacao.map(sobra => sobra / 100))
        }

        // Retorna todas as combinações calculadas
        return combinacoes
    }

    return (

        <>

            <div id='home02'>
                <HomeButton action={() => back(null)} />
            </div>

            <div className="erro02">
                {erroPerf2 && (<span>{erroPerf2}</span>)}
            </div>

            <div className="dados-de-input">
                <header id="dados-para-calculo"><h3>Perfil de {metragem.toFixed(2)}m</h3></header>
                <div id="inputs">
                    <span className='spanInput'>
                    <input
                        type="text"
                        id="entradaValor"
                        name="metragem"
                        placeholder="17.75"
                        value={valorDigitado}
                        onChange={handleChangePerf}
                        onKeyDown={handleKeydownPerf}
                    />

                     <span>
                    <Tooltip
                        title={
                            "1 - Informe o tamanho do segmento que será calculado em numeros decimais ou inteiros.\n" +
                            "Exemplo: 17 ou 17.75\n" +
                            "2 - Use ponto para valores decimais.\n" +
                            "Exemplo: 11.50\n" +
                            "3 - Não é possível realizar operações de adição, subtração e divisão\n" +
                            "Exemplo: 5+2, 5-2, 6/2\n" +
                            "4 - Operações de multiplicação funcionar de forma diferente, nessa operação o primeiro numero da multiplicação diz" + 
                            " quantas vezes o segundo numero se repete\n" +
                            "Exemplo: \n3*2 + enter \nEntrada= 2.00m, Barras= 0x3.00m, Sobras= 2.00m" +
                            "\nEntrada= 2.00m, Barras= 0x3.00m, Sobras= 2.00m" +
                            "\nEntrada= 2.00m, Barras= 0x3.00m, Sobras= 2.00m\n" +
                            "5 - Para enviar o valor para calculo, basta pressionar a tecla enter\n"
                        }
                        arrow
                        slotProps={{
                            tooltip: {
                                sx: {
                                    whiteSpace: 'pre-line'
                                }
                            }
                        }}
                    >
                        <InfoOutlinedIcon
                            fontSize="small"
                            sx={{
                                color: 'yellow',
                                cursor: 'help'
                            }}
                        />
                    </Tooltip>
                </span>
                </span>

                </div>

               

                <div className="container">
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

                    <div id='button-div'>
                        <Button
                            id="iniciar-calculo"
                            text="Calcular"
                            action={(e) => {
                                e.preventDefault()
                                const combinacoes = calculandoSobras()
                                enviarTrue("relatorio")
                                barrasInteiras(perfilInteriros)
                                barrasCortes(combinacoes.length)
                                enviarCombinacoes(combinacoes)
                            }}
                        />
                    </div>

                </div>

            </div>
        </>
    )
}

export default InputPerf
