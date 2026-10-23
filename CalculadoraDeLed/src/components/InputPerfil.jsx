import './DadosDeEntrada.css'
import { useState } from 'react'
import Button from './Button.jsx'

const InputPerfil = ({ enviarRelatorio, enviarMetragem }) => {

    const [metragem, setMetragem] = useState("")

    // Valida a metragem
    const handleMetragem = (e) => {
        const valor = e.target.value

        // Permite apenas números e um ponto decimal
        if (!/^\d*\.?\d*$/.test(valor)) return

        setMetragem(valor)
    }

    // Impede o envio pelo Enter
    const preventEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
        }
    }

    // Envia a metragem
    const openTab = () => {
        enviarRelatorio("tabela")
        enviarMetragem(Number(metragem))
    }

    return (
        <>
            <div className="container">
                <form className="form-geral">
                    <label className="divisao">
                        <span>
                            Tamanho do perfil: (m)
                            <span className="obrigatorio">*</span>
                        </span>

                        <input
                            type="text"
                            name="metragem"
                            placeholder="EX: 2.50"
                            className="dados-iniciais"
                            value={metragem}
                            onChange={handleMetragem}
                            onKeyDown={preventEnter}
                        />
                    </label>
                </form>

                <Button
                    id="save"
                    text="Salvar Configurações"
                    action={openTab}
                />
            </div>
        </>
    )
}

export default InputPerfil