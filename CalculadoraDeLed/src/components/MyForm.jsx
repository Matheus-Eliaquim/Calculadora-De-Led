import CSS from './moduleCSS/Myform.module.css'
import { useState } from 'react'



const MyForm = () => {

    const [potencia, settPotencia] = useState("")
    const [rolo, settRolo] = useState("")
    const [perfil, settPerfil] = useState("")
    const [coeficiente, settCoeficiente] = useState("")

    {/* Funcões para manipular dados */ }

    const handlePotencia = (e) => {
        settPotencia(e.target.value)
    }

    const handleRolo = (e) => {
        settRolo(e.target.value)
    }

    const handlePerfil = (e) => {
        settPerfil(e.target.value)
    }

    const handleCoeficiente = (e) => {
        settCoeficiente(e.target.value)
    }


    return (
        <>
            <form className={CSS.formGeral} >
                <label className={CSS.divisao}>
                    <span>Potencia da fita (W/metros): <span className={CSS.obrigatorio}>*</span> </span>
                    <input type="text" name='potencia' placeholder='12' onChange={handlePotencia} className={CSS.dadosIniciais} />
                </label>

                <label className={CSS.divisao}>
                    <span>Tamanho do rolo de fita (Metros): <span className={CSS.obrigatorio}>*</span> </span>
                    <input type="text" name='roloDeFita' placeholder='5' onChange={handleRolo} className={CSS.dadosIniciais} />
                </label>

                <label className={CSS.divisao}>
                    <span>Tamanho do perfil (Metros): <span className={CSS.obrigatorio}>*</span> </span>
                    <input type="text" name='perfil' placeholder='3' onChange={handlePerfil} className={CSS.dadosIniciais} />
                </label>

                <label className={CSS.divisao}>
                    <span>Coeficiente de Segurança (%): <span className={CSS.obrigatorio}>*</span> </span>
                    <input type="text" name='coeficiente' placeholder='20' onChange={handleCoeficiente} className={CSS.dadosIniciais} />
                </label>

                <label className={CSS.divisao}>
                    <span>Metragem: </span>
                    <input type="text" name='entradaValor' placeholder='15.50' onChange={handlePerfil} className={CSS.entradaMetros} />
                </label>
            </form>
        </>
    )
}

export default MyForm