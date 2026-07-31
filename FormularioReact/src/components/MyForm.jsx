import CSS from './moduleCSS/Myform.module.css'
import { useState } from 'react'



const MyForm = () => {

    const [potencia, settPotencia]= useState("")
    const [rolo, settRolo]= useState("")
    const [perfil, settPerfil]= useState("")

    {/* Funcões para manipular dados */}

    const handlePotencia = (e) => {
        settPotencia(e.target.value)
    }

    const handleRolo = (e) => {
        settRolo(e.target.value)
    }

    const handlePerfil = (e) => {
        settPerfil(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault() //cancela o recarregamento da pagina ao enviar o formulario
        console.log(potencia,rolo,perfil)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={CSS.formGeral} >                
                    <label className={CSS.divisao}>
                        <span>Potencia da fita (W/metros): <span className={CSS.obrigatorio}>*</span> </span>
                        <input type="text" name='potencia' placeholder='12' onChange={handlePotencia} className={CSS.dadosIniciais}/>
                    </label>

                    <label className={CSS.divisao}>
                        <span>Tamanho do rolo de fita (Metros): <span className={CSS.obrigatorio}>*</span> </span>
                        <input type="text" name='roloDeFita' placeholder='5' onChange={handleRolo} className={CSS.dadosIniciais}/>
                    </label>

                    <label className={CSS.divisao}>
                        <span>Tamanho do perfil (Metros): <span className={CSS.obrigatorio}>*</span> </span>
                        <input type="text" name='perfil' placeholder='3' onChange={handlePerfil} className={CSS.dadosIniciais}/>
                    </label>

                    <label className={CSS.divisao}>
                        <span></span>
                    </label>
            </form>
        </>
    )
}

export default MyForm