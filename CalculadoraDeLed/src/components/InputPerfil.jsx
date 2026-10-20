import './DadosDeEntrada.css'
import { useState } from 'react'
import Button from './Button.jsx'

const InputPerfil = ({ enviarRelatorio, enviarMetragem }) => {

    const [metragem, setMetragem] = useState(0)
    const handleMetragem = (e) => {
        setMetragem(e.target.value)
    }
    const preventEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
        }
    }

    const openTab = () => {
        enviarRelatorio("tabela")
        enviarMetragem(Number(metragem))
    }

    return (

        <>
            <div className="container">
                <form className="form-geral">
                    <label className="divisao">
                        <span>Tamanho do perfil: (m)<span className="obrigatorio">*</span></span>
                        <input
                            type="text"
                            name="metragem"
                            placeholder="EX: 2.50"
                            className="dados-iniciais"
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