import './InputPerfil.css'
import Button from './Button.jsx'

const InputPerfil = () => {
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
                            id="input-metragem" />
                    </label>
                </form>

                <Button
                    id="save"
                    text="Salvar Configurações"
                    
                />

            </div>


        </>
    )
}

export default InputPerfil