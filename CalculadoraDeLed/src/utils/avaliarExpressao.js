
export function validarExpressaoDigitada(expressao) {

    /*
     * Verifica se o valor recebido realmente é uma string.     
     * Caso não seja uma string, consideramos o valor inválido.
     */
    if (typeof expressao !== 'string') {
        return true
    }

    /*
     * Durante a digitação, SOMENTE a vírgula é inválida.     
     * O caractere "-" NÃO é verificado aqui.
     * O caractere "/" NÃO é verificado aqui.     
     * Isso permite que o usuário digite:     
     * 10-5
     * 10/5     
     * normalmente.
     */
    return expressao.includes(',')
}



export function avaliarExpressao(expressao) {

    /*
     * 1. VERIFICA O TIPO DO VALOR RECEBIDO
     */

    if (typeof expressao !== 'string') {
        throw new TypeError('A expressão deve ser uma string.')
    }


    /*
     * 2. REMOVE ESPAÇOS DAS EXTREMIDADES     
     * Exemplo:     
     * "   10+5   "     
     * passa a ser:     
     * "10+5"
     */

    expressao = expressao.trim()


    /*
     * 3. VERIFICA SE A EXPRESSÃO ESTÁ VAZIA
     */

    if (expressao.length === 0) {
        throw new SyntaxError('Expressão inválida.')
    }


    /*
     * 4. REJEITA SUBTRAÇÃO E DIVISÃO     
     * IMPORTANTE:     
     * "-" e "/" podem ser digitados normalmente no input.     
     * Porém, quando o usuário clicar em CALCULAR,
     * esta parte da função fará a validação.     
     * Portanto:     
     * 10-5     
     * e:     
     * 10/5     
     * resultarão em:     
     * "Expressão inválida."
     */

    if (
        expressao.includes('-') ||
        expressao.includes('/')
    ) {
        throw new SyntaxError('Expressão inválida.')
    }


    /*
     * 5. REJEITA VÍRGULA     
     * Embora normalmente a vírgula já seja detectada
     * durante a digitação, fazemos novamente a verificação
     * por segurança.
     */

    if (expressao.includes(',')) {
        throw new SyntaxError('Expressão inválida.')
    }


    /*

     * 6. LISTA DE TOKENS     
     * Aqui serão armazenados os números e operadores.     
     * Exemplo:     
     * Expressão:     
     * 10+5*2     
     * Tokens:     
     * [
     *   10,
     *   "+",
     *   5,
     *   "*",
     *   2
     * ]
     */

    const tokens = []

    /*
     * Posição atual durante a leitura da expressão.
     */
    let posicao = 0


    /*
     * 7. PERCORRE TODA A EXPRESSÃO
     */

    while (posicao < expressao.length) {

        /*

         * IGNORA ESPAÇOS
         * Permite, por exemplo:         
         * 10 + 5         
         * em vez de obrigar:         
         * 10+5
         */

        if (/\s/.test(expressao[posicao])) {
            posicao += 1
            continue
        }


        /*
         * Pega o restante da expressão a partir
         * da posição atual.
         */

        const trecho = expressao.slice(posicao)


        /*

         * IDENTIFICA NÚMEROS         
         * Esta expressão regular aceita:         
         * 10
         * 2.5
         * 3.0
         * .75
         * 10.        
         * Não aceita:         
         * 2,5
         */

        const numero = trecho.match(
            /^(?:\d+(?:\.\d*)?|\.\d+)/
        )


        /*
         * Se encontrou um número...
         */

        if (numero) {

            /*
             * Converte o texto encontrado para Number.             
             * Exemplo:             
             * "10"  -> 10
             * "2.5" -> 2.5
             */

            const valorNumerico = Number(numero[0])


            /*
             * Garante que o número encontrado
             * realmente seja válido.
             */

            if (!Number.isFinite(valorNumerico)) {
                throw new SyntaxError('Expressão inválida.')
            }


            /*
             * Adiciona o número à lista de tokens.
             */

            tokens.push(valorNumerico)


            /*
             * Avança a posição pelo tamanho do número.
             */

            posicao += numero[0].length


            /*
             * Continua para a próxima parte da expressão.
             */

            continue
        }


        /*
         * 8. IDENTIFICA OPERADORES
         */

        const operador = expressao[posicao]


        /*
         * Os únicos operadores válidos para cálculo são:         
         * +
         * *
         */

        if (
            operador === '+' ||
            operador === '*'
        ) {

            /*
             * Adiciona o operador aos tokens.
             */

            tokens.push(operador)


            /*
             * Avança uma posição.
             */

            posicao += 1


            /*
             * Continua a leitura.
             */

            continue
        }


        /*
         * 9. QUALQUER OUTRO CARACTERE É INVÁLIDO         
         * Exemplos:         
         * abc
         * (
         * )
         * %
         * $
         * #
         */

        throw new SyntaxError('Expressão inválida.')
    }


    /*
     * 10. VERIFICA SE EXISTEM TOKENS
     */

    if (tokens.length === 0) {
        throw new SyntaxError('Expressão inválida.')
    }


    /*
     * Índice utilizado para percorrer a lista de tokens.
     */

    let indice = 0


    /*

     * 11. FUNÇÃO PARA LER UM NÚMERO     
     * Sempre que precisamos de um número,
     * esta função verifica se realmente existe um número
     * naquela posição.   
     * Isso também impede expressões como:     
     * +10
     * *10
     * 10+
     * 10*
     * 10++5
     * 10**5
     */

    const lerFator = () => {

        /*
         * Pega o token atual.
         */

        const valor = tokens[indice]


        /*
         * O token obrigatoriamente precisa ser um número.
         */

        if (typeof valor !== 'number') {
            throw new SyntaxError('Expressão inválida.')
        }


        /*
         * Avança para o próximo token.
         */

        indice += 1


        /*
         * Retorna o número encontrado.
         */

        return valor
    }


    /*
     * 12. FUNÇÃO PARA PROCESSAR MULTIPLICAÇÃO     
     * A multiplicação possui prioridade sobre a soma.     
     * Exemplo:     
     * 2+3*4     
     * Primeiro:     
     * 3*4 = 12     
     * Depois:     
     * 2+12 = 14
     */

    const lerTermo = () => {

        /*
         * Lê o primeiro número.
         */

        let valor = lerFator()


        /*
         * Enquanto encontrar multiplicação...
         */

        while (tokens[indice] === '*') {

            /*
             * Pula o operador "*".
             */

            indice += 1


            /*
             * Lê o próximo número e realiza
             * a multiplicação.
             */

            valor *= lerFator()
        }


        /*
         * Retorna o resultado do termo.
         */

        return valor
    }


    /*
     * 13. CALCULA O PRIMEIRO TERMO
     */

    let resultado = lerTermo()


    /*
     * 14. PROCESSA AS SOMAS RESTANTES
     */

    while (indice < tokens.length) {

        /*
         * Obtém o operador atual.
         */

        const operador = tokens[indice]


        /*
         * Neste ponto, somente "+" pode aparecer.         
         * A multiplicação já foi processada em lerTermo().
         */

        if (operador !== '+') {
            throw new SyntaxError('Expressão inválida.')
        }


        /*
         * Avança para o próximo token.
         */

        indice += 1


        /*
         * Calcula o próximo termo.
         */

        const proximoTermo = lerTermo()


        /*
         * Soma ao resultado.
         */

        resultado += proximoTermo
    }


    /*
     * 15. VERIFICA SE O RESULTADO É VÁLIDO
     */

    if (!Number.isFinite(resultado)) {
        throw new SyntaxError('Resultado inválido.')
    }


    /*
     * 16. RETORNA O RESULTADO FINAL
     */

    return resultado
}