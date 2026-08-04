import DadosDeEntrada
import './App.css'

function App() {

  return (
    <>
      <DadosEntrada />

      <div>
        <span>Metragem: </span>
        <input type="text" name='entradaValor' placeholder='15.50' onChange={handlePerfil} className={CSS.entradaMetros} />
      </div>
    </>
  )
}

export default App
