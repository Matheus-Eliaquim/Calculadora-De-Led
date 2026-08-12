import './DadosDeEntrada.css'
import { useState } from 'react'
import Button from './Button.jsx'



const DadosEntrada = ({ entradaDados }) => {

    const [potencia, settPotencia] = useState("")
    const [rolo, settRolo] = useState("")
    const [perfil, settPerfil] = useState("")
    const [coeficiente, settCoeficiente] = useState("")

    {/* Funcões para manipular dados */ }

    const handlePotencia = (e) => settPotencia(e.target.value)
    const handleRolo = (e) => settRolo(e.target.value)
    const handlePerfil = (e) => settPerfil(e.target.value)
    const handleCoeficiente = (e) => settCoeficiente(e.target.value)

    {/* enviando dados para o elemento pai */ }
    const savedDados = (e) => {
        e.preventDefault()

        entradaDados({ potencia, rolo, perfil, coeficiente })

    }

    return (
        <div className="container">
            <form className="form-geral" >
                <label className="divisao">
                    <span>Potencia da fita (W/metros): <span className="obrigatorio">*</span> </span>
                    <input type="text" name='potencia' placeholder='12' onChange={handlePotencia} className="dados-iniciais" />
                </label>

                <label className="divisao">
                    <span>Tamanho do rolo de fita (Metros): <span className="obrigatorio">*</span> </span>
                    <input type="text" name='roloDeFita' placeholder='5' onChange={handleRolo} className="dados-iniciais" />
                </label>

                <label className="divisao">
                    <span>Tamanho do perfil (Metros): <span className="obrigatorio">*</span> </span>
                    <input type="text" name='perfil' placeholder='3' onChange={handlePerfil} className="dados-iniciais" />
                </label>


                <label className="divisao">
                    <span>Coeficiente de Segurança (%): <span className="obrigatorio">*</span> </span>
                    <input type="text" name='coeficiente' placeholder='20' onChange={handleCoeficiente} className="dados-iniciais" />
                </label>
            </form>

            <Button id="save" text="Salvar Configurações" action={savedDados} />
                                
        </div>
    )
}

export default DadosEntrada