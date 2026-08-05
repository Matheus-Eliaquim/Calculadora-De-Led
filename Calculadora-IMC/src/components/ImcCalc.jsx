import Button from './Button.jsx'
import './ImcCalc.css'

const ImcCalc = () => {
    return (
        <div id='calc-container'>
            <h2>Calculadore de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura (m): </label>
                        <input type="text" name='height' id='height' placeholder='Exemplo: 1,75' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso (Kg): </label>
                        <input type="text" name='weight' id='weight' placeholder='Exemplo: 80.50' />
                    </div>
                </div>

                <div className='action-control'>
                    <Button id='calc-btn' text='Calcular' /> 
                    <Button id='clear-btn' text='Limpar' />                     
                </div>
            </form>
        </div>
    )
}

export default ImcCalc