import './InputPerfil.css'
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
        enviarRelatorio(true)
        enviarMetragem(Number(metragem))
    }

    return (

        <>
            <div>
                <form >
                    <label className="form-label">
                        <span>Tamanho do perfil: (m)<span id="required">*</span></span>
                        <input
                            type="text"
                            name="metragem"
                            placeholder="EX: 2.50"
                            id="input-metragem"
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