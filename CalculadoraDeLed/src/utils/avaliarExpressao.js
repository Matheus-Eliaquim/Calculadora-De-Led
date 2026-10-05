// Função utilizada para avaliar expressões com números decimais e operadores básicos (+, -, *)
export function avaliarExpressao(expressao) {
    // Verifica se o parâmetro recebido é uma string
    if (typeof expressao !== 'string') {
        throw new TypeError('A expressão deve ser uma string.')
    }

    const tokens = [] // Lista que armazenará números e operadores
    let posicao = 0   // Índice atual na string

    // Loop para separar números e operadores da expressão
    while (posicao < expressao.length) {
        // Ignora espaços em branco
        if (/\s/.test(expressao[posicao])) {
            posicao += 1
            continue
        }

        // Captura números decimais (ex: 12, 3.5, .75)
        const trecho = expressao.slice(posicao)
        const numero = trecho.match(/^(?:\d+(?:\.\d*)?|\.\d+)/)
        if (numero) {
            tokens.push(Number(numero[0])) // Converte para número e adiciona à lista
            posicao += numero[0].length
            continue
        }

        // Captura operadores válidos (+, -, *)
        const operador = expressao[posicao]
        if (['+', '-', '*'].includes(operador)) {
            tokens.push(operador)
            posicao += 1
            continue
        }

        // Caso encontre algo inválido
        throw new SyntaxError('Expressão inválida.')
    }

    // --- Funções auxiliares para avaliação ---

    let indice = 0 // Índice atual dentro da lista de tokens

    // Lê um fator (número com sinal positivo ou negativo)
    const lerFator = () => {
        let sinal = 1
        // Trata sinais consecutivos (+ ou -) antes do número
        while (tokens[indice] === '+' || tokens[indice] === '-') {
            if (tokens[indice] === '-') sinal *= -1
            indice += 1
        }

        const valor = tokens[indice]
        if (typeof valor !== 'number') throw new SyntaxError('Expressão inválida.')
        indice += 1
        return sinal * valor
    }

    // Lê um termo (número ou multiplicação de fatores)
    const lerTermo = () => {
        let valor = lerFator()
        // Multiplicações têm prioridade sobre soma/subtração
        while (tokens[indice] === '*') {
            indice += 1
            valor *= lerFator()
        }
        return valor
    }

    // Se não houver tokens, a expressão é inválida
    if (tokens.length === 0) throw new SyntaxError('Expressão inválida.')

    // Avalia a expressão considerando a ordem de operações
    let resultado = lerTermo()
    while (indice < tokens.length) {
        const operador = tokens[indice]
        if (operador !== '+' && operador !== '-') throw new SyntaxError('Expressão inválida.')
        indice += 1
        const proximoTermo = lerTermo()
        resultado = operador === '+' ? resultado + proximoTermo : resultado - proximoTermo
    }

    // Verifica se o resultado é um número válido
    if (!Number.isFinite(resultado)) throw new SyntaxError('Resultado inválido.')
    return resultado
}
