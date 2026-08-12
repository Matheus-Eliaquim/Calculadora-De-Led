// Importando componentes e hooks necessários
import Button from './Button.jsx' // Componente de botão personalizado
import { useState, useEffect } from 'react' // Hooks do React para estado e efeitos colaterais
import TabelaDeMetros from './TabelaDeMetros.jsx'
import './InputMetros.css' // Estilos CSS específicos para este componente

// Componente principal que recebe propriedades (props) de configuração
const InputMetros = ({ potencia, rolo, perfil, coeficiente }) => {

    // Função chamada ao clicar no botão "Calcular"
    const btnCalcular = (e) => {
        e.preventDefault() // Evita o comportamento padrão do formulário (recarregar a página)
    }

    // Estados internos do componente
    const [fontePotencia, settFontePotencia] = useState("") // Estado para armazenar a potência da fonte (não está sendo usado)
    const [valor, settValor] = useState("") // Estado para armazenar o valor digitado pelo usuário (metragem)
    const [distancia, settDistancia] = useState("") // Estado para armazenar a distância escolhida nos rádios
    const [fonteQTD, settFonteQTD] = useState("") // Estado para armazenar a quantidade de fontes calculadas
    const perf = perfil

    // Hook useEffect: executa sempre que "valor" ou "distancia" mudam
    // Serve para calcular em tempo real a quantidade de fontes necessárias
    useEffect(() => {
        if (valor && distancia) { // Só calcula se ambos tiverem valor
            const qtd = settFonteQTD(Math.ceil(valor / distancia)) // Divide o valor pela distância e arredonda para cima
        }
    })

    // Função que trata o evento de pressionar uma tecla no input
    const handleKeydown = (e) => {
        if (e.key === "Enter") { // Se a tecla pressionada for "Enter"
            console.log(distancia, valor, fonteQTD) // Mostra os valores atuais no console
            settValor("") // Limpa o campo de valor após pressionar Enter
        }
    }

    // Função que atualiza o estado "distancia" quando o usuário seleciona um rádio
    const handleDist = (e) => {
        settDistancia(e.target.value) // Pega o valor do rádio selecionado
    }

    // Estrutura JSX que define o layout do componente
    return (
        <div className='dados-de-input'>
            <header id='dados-para-calculo'>
                {/* Exibe os valores recebidos via props */}
                <h3>Potencia da fita: {potencia}W/m</h3>
                <h3>Rolo de fita: {rolo}m</h3>
                <h3>Barra de perfil: {perfil}m</h3>
                <h3>Coeficiente de segurança: {coeficiente}%</h3>
            </header>
            <div id="metragem-individual">
                <div id='inputs'>
                    {/* Campo de entrada para metragem */}
                    <input type="text"
                        id='entradaValor'
                        name="metragem"
                        placeholder='digite o tamanho em metros. EX: 12,00'
                        value={valor} // Valor controlado pelo estado
                        onChange={(e) => settValor(e.target.value)} // Atualiza estado ao digitar
                        onKeyDown={handleKeydown} // Executa função ao pressionar tecla
                    />
                    <h4>Espaçamento por Fonte</h4>
                    <div id='radios'>
                        {/* Opções de espaçamento entre fontes */}
                        <label className='radio-inputs'>
                            <input type="radio"
                                value='5'
                                name='fonts'
                                checked={distancia === "5"}
                                onClick={handleDist} // Atualiza estado ao clicar
                            />
                            5m
                        </label>
                        <label className='radio-inputs'>
                            <input type="radio"
                                value='7'
                                name='fonts'
                                checked={distancia === "7"}
                                onClick={handleDist}
                            />
                            7m
                        </label>
                        <label className='radio-inputs'>
                            <input type="radio"
                                value='1000'
                                name='fonts'
                                checked={distancia === "1000"}
                                onClick={handleDist}
                            />
                            01 Fonte
                        </label>
                    </div>
                </div>
                {/* Botão que chama a função de cálculo */}
                <Button id='iniciar-calculo' text='Calcular' action={btnCalcular} />
            </div>
            <TabelaDeMetros valor={valor}  perfil={perf}  qtdFonte={fonteQTD} potenciaFonte={fontePotencia}/>  
        </div>
    )
}

// Exporta o componente para ser usado em outros arquivos
export default InputMetros
