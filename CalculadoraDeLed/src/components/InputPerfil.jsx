import './DadosDeEntrada.css'
import { useState } from 'react'
import Button from './Button.jsx'
import HomeButton from './HomeButton.jsx'

const InputPerfil = ({ enviarRelatorio, enviarMetragem }) => {

    const [metragem, setMetragem] = useState("")

    // Mensagens de erro  
    const [erroPerf, setErroPerf] = useState("")

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

        // Verifica se todos os campos foram preenchidos
        if (!metragem) {
            setErroPerf(!metragem ? "O campo Tamanho é obrigatorio!" : "")
            return
        }

        enviarRelatorio("tabela")
        enviarMetragem(Number(metragem))
    }

    return (
        <>

        <div id='home'>
            <HomeButton action= {() => enviarRelatorio("tabela")} />
        </div>
            
            
            <div className="erro">
                {erroPerf && (<span>{erroPerf}</span>)}
            </div>

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