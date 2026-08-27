// Importa hooks do React e componentes externos
import { useState, useEffect } from 'react'
import Button from './Button.jsx' // Componente de botão personalizado
import './InputMetros.css' // Estilos específicos para este componente
import './responsividade.css' // Estilos de responsividade

// Componente principal que recebe propriedades de configuração
const InputMetros = ({ potencia, rolo, perfil, coeficiente }) => {
    // Estados internos do componente
    const [valor, setValor] = useState('') // Valor digitado pelo usuário (metragem)
    const [distancia, setDistancia] = useState('5') // Espaçamento entre fontes (default 5m)
    const [fonteQTD, setFonteQTD] = useState('') // Quantidade de fontes calculadas
    const [fontePotencia, setFontePotencia] = useState('') // Potência de cada fonte calculada
    const [linhasTabela, setLinhasTabela] = useState([]) // Lista de linhas que serão exibidas na tabela
    const [fonte200, setFonte200] = useState(false); // estado para saber se fonte única está ativa

    const fontes = {
        fonte18W: 0,
        fonte24W: 0,
        fonte36W: 0,
        fonte48W: 0,
        fonte60W: 0,
        fonte72W: 0,
        fonte100W: 0,
        fonte150W: 0,
        fonte200W: 0,
    }

    const perf = Number(perfil); // Converte perfil recebido via props para número

    // useEffect: calcula quantidade de fontes sempre que "valor" ou "distancia" mudam
    useEffect(() => {
        if (fontePotencia === '200') {
            setFonteQTD(Math.ceil((valor * potencia) / fontePotencia))
            return
        }
        if (valor && distancia) {
            // Divide o valor pela distância e arredonda para cima
            setFonteQTD(Math.ceil(valor / distancia))
        }
    }, [valor, distancia])

    // useEffect: calcula a potência da fonte sempre que dependências mudam
    useEffect(() => {

        if (fonte200) return;

        if (valor && fonteQTD && potencia && coeficiente) {
            // Calcula potência parcial
            const watsParcial = (Number(valor) * potencia) / fonteQTD
            // Aplica coeficiente de segurança
            const coeficienteReal = coeficiente / 100 + 1
            const watsReal = watsParcial * coeficienteReal
            // Atualiza estado com potência arredondada
            setFontePotencia(watsReal.toFixed(0))
        }

    }, [valor, fonteQTD, potencia, coeficiente])

    // Função chamada ao apertar Enter no input
    const handleKeydown = (e) => {
        if (e.key === 'Enter' && valor) {
            const va = Number(valor) // Converte valor digitado para número
            const inteiras = Math.floor(va / perf) // Quantidade de barras inteiras
            const resto = va % perf // Sobra da divisão

            // Adiciona nova linha na tabela com os cálculos
            setLinhasTabela((prev) => [
                ...prev,
                {
                    valor: va,
                    perf: perf,
                    barrasInteiras: inteiras,
                    resto: resto,
                    qtdFonte: fonteQTD,
                    potenciaFonte: fontePotencia,
                },
            ])
            setValor('')
        }
    }

    // Função para atualizar o espaçamento entre fontes (quando usuário seleciona rádio)
    const handleDist = (e) => {
        setDistancia(e.target.value)
    }

    //função para calcular corretamente a potencia das fontes


    // JSX que define a interface do componente
    return (
        <div className="dados-de-input">
            {/* Cabeçalho com informações recebidas via props */}
            <header id="dados-para-calculo">
                <h3>Potencia da fita: {potencia}W/m</h3>
                <h3>Rolo de fita: {rolo}m</h3>
                <h3>Barra de perfil: {perfil}m</h3>
                <h3>Coeficiente de segurança: {coeficiente}%</h3>
            </header>

            {/* Área de entrada de dados */}
            <div id="metragem-individual">
                <div id="inputs">
                    {/* Campo de texto para digitar metragem */}
                    <input
                        type="text"
                        id="entradaValor"
                        name="metragem"
                        placeholder="digite o tamanho em metros. EX: 12,00"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)} // Atualiza estado ao digitar
                        onKeyDown={handleKeydown} // Adiciona linha ao apertar Enter
                    />
                    <h4>Espaçamento por Fonte</h4>
                    <div id="radios">
                        {/* Opções de espaçamento entre fontes */}
                        <label className="radio-inputs">
                            <input
                                type="radio"
                                value="5"
                                name="fonts"
                                checked={!fonte200 && distancia === '5'}
                                onChange={(e) => {
                                    setDistancia(e.target.value)
                                    setFonte200(false)
                                }}
                            />
                            5m
                        </label>
                        <label className="radio-inputs">
                            <input
                                type="radio"
                                value="7"
                                name="fonts"
                                checked={!fonte200 && distancia === '7'}
                                onChange={(e) => {
                                    setDistancia(e.target.value)
                                    setFonte200(false)
                                }}
                            />
                            7m
                        </label>
                        <label className="radio-inputs">
                            <input
                                type="radio"
                                value="200"
                                name="fonts"
                                checked={fonte200}
                                onChange={() => {
                                    setFonte200(true)
                                    setFontePotencia('200')
                                }}
                            />
                            Fonte de 200W
                        </label>
                    </div>
                    {/* Tabela que exibe as linhas adicionadas */}
                    <div className="container">
                        <table id="tabela-entradas">
                            <thead>
                                <tr>
                                    <th>Entradas</th>
                                    <th>Barras de {perf.toFixed(2)}m</th>
                                    <th>Sobras</th>
                                    <th>Fontes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {linhasTabela.map((linha, index) => (
                                    <tr key={index}>
                                        <td>{Number(linha.valor).toFixed(2)}m</td>
                                        <td>{linha.barrasInteiras}x{Number(linha.perf).toFixed(2)}m</td>
                                        <td>{Number(linha.resto).toFixed(2)}m</td>
                                        <td>{linha.qtdFonte}x{linha.potenciaFonte}W</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div id='button-div'>
                            {/* Botão de cálculo (não faz nada além de prevenir reload) */}
                            <Button id="iniciar-calculo" text="Calcular" action={(e) => e.preventDefault()} />
                        </div>
                    </div>
                    {/* fecha container */}
                </div>
                {/* fecha inputs */}
            </div>
            {/* fecha metragem individual */}
        </div>
    );
};

// Exporta o componente para ser usado em outros arquivos
export default InputMetros;
