import './App.css'
import DadosEntrada from './components/DadosDeEntrada.jsx'
import TabelasFitasPerfis from './components/TabelasFitasPerfis.jsx'
import TabelaFitasPerfis from './components/TabelasFitasPerfis.jsx'
import TabelasFontesTotais from './components/TabelasFontesTotais.jsx'

function App() {

  return (
    <>
      <section>
        <DadosEntrada />
        <TabelasFitasPerfis />
        <TabelasFontesTotais />
      </section>

      <section>
        <div>
          <span>Metragem: </span>
          <input type="text" name='entradaValor' placeholder='15.50' />
        </div>
      </section>      
    </>
  )
}

export default App
