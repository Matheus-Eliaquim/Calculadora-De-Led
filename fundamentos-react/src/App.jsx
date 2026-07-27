import './App.css'
import Props from './components/Props'
import PropDestructurin from './components/PropDestructurin'
import RenderCondicionals from './components/RenderCondicionals'
import List from './components/List'

function App() {


  return (
    <>
      <div>
        <p>Estudando renderização de listas</p>
        <List />
      </div>

      <div>
        <p>Estudando renderização condicional</p>
        <RenderCondicionals />
      </div>

      <div>
        <p>estudando props</p>
        <Props name='Matheus' /> {/* enviando props sem destructurin */}
      </div>

      <div>
        <p>estudando destructurin props</p>
        <PropDestructurin nome='João' curso="Administração" periodo={2} />
        {/* 
        ********************************* props destructurin *************************************
        Lembrar de não passar numeros entre aspas no props, numeros devem ser enviado entre chaves
      */}
      </div>

      <div>
        <p>Reutilizando componentes</p>
          <PropDestructurin nome='Lucas' curso="Direito" periodo={9} />        
      </div>
    </>
  )
}

export default App
