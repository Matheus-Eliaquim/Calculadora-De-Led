import './DadosDeEntrada.css'
import { useState } from 'react'
import Button from './Button.jsx'
import './responsividade.css'

const DadosEntrada = ({ entradaDados }) => {
    // Valores dos campos
    const [potencia, setPotencia] = useState("")
    const [rolo, setRolo] = useState("")
    const [coeficiente, setCoeficiente] = useState("")

    // Mensagens de erro
    const [erroPotencia, setErroPotencia] = useState("")
    const [erroRolo, setErroRolo] = useState("")
    const [erroCoeficiente, setErroCoeficiente] = useState("")

    // Valida a potência
    const handlePotencia = (e) => {
        const valor = e.target.value

        // Aceita apenas números e um ponto decimal
        if (!/^\d*\.?\d*$/.test(valor)) return

        setPotencia(valor)
    }

    const handleRolo = (e) => {
        const valor = e.target.value

        // Aceita apenas números e um ponto decimal
        if (!/^\d*\.?\d*$/.test(valor)) return

        setRolo(valor)
    }

    const handleCoeficiente = (e) => {
        const valor = e.target.value

        // Aceita apenas números e um ponto decimal
        if (!/^\d*\.?\d*$/.test(valor)) return

        setCoeficiente(valor)
    }

    // Salva os dados
    const savedDados = (e) => {
        e.preventDefault()

        // Verifica se todos os campos foram preenchidos
        if (!potencia || !rolo || !coeficiente) {
            setErroPotencia(!potencia ? "Campo obrigatório!" : "")
            setErroRolo(!rolo ? "Campo obrigatório!" : "")
            setErroCoeficiente(!coeficiente ? "Campo obrigatório!" : "")
            return
        }

        // Envia os valores como números
        entradaDados({
            potencia: Number(potencia),
            rolo: Number(rolo),
            coeficiente: Number(coeficiente)
        })
    }

    return (
        <div className="container">
            <form className="form-geral">

                <label className="divisao">
                    <span>
                        Potencia da fita (W/metros):
                        <span className="obrigatorio">*</span>
                    </span>

                    <input
                        type="text"
                        name="potencia"
                        placeholder="12"
                        value={potencia}
                        onChange={handlePotencia}
                        className="dados-iniciais"
                    />

                    {erroPotencia && (
                        <span className="erro">{erroPotencia}</span>
                    )}
                </label>

                <label className="divisao">
                    <span>
                        Tamanho do rolo de fita (Metros):
                        <span className="obrigatorio">*</span>
                    </span>

                    <input
                        type="text"
                        name="roloDeFita"
                        placeholder="5"
                        value={rolo}
                        onChange={handleRolo}
                        className="dados-iniciais"
                    />

                    {erroRolo && (
                        <span className="erro">{erroRolo}</span>
                    )}
                </label>

                <label className="divisao">
                    <span>
                        Coeficiente de Segurança (%):
                        <span className="obrigatorio">*</span>
                    </span>

                    <input
                        type="text"
                        name="coeficiente"
                        placeholder="20"
                        value={coeficiente}
                        onChange={handleCoeficiente}
                        className="dados-iniciais"
                    />

                    {erroCoeficiente && (
                        <span className="erro">{erroCoeficiente}</span>
                    )}
                </label>

            </form>

            <Button
                id="save"
                text="Salvar Configurações"
                action={savedDados}
            />
        </div>
    )
}

export default DadosEntrada