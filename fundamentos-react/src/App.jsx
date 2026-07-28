import './App.css'
import Props from './components/Props'
import PropDestructurin from './components/PropDestructurin'
import RenderCondicionals from './components/RenderCondicionals'
import ListComponents from './components/ListComponents'
import Children from './components/Children'
import List from './components/List'

//definindo objeto alunos para repetição de lista com componentes usando o metodo map
const alunos = [
  { id: 1, nome: "Sara", periodo: 7, curso: "Arquitetura e urbanismo" },
  { id: 2, nome: "Jorge", periodo: 3, curso: "Enhenharia Civil" },
  { id: 3, nome: "Lucas", periodo: 9, curso: "Design Grafico" },
]

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

      {/*renderizando informações do objeto alunos com map atravez do componento PropDestructurin */}
      <div>
        {alunos.map((aluno) => {
          return (
            <div key={aluno.id}>
              <p>Renderizando componentes com o map</p>
              <PropDestructurin
                nome={aluno.nome}
                curso={aluno.curso}
                periodo={aluno.periodo} />
            </div>
          )
        })}
      </div>

      <div>
        <Children>
          <div>
            <h4>Esse é o texto criado com a children</h4>
          </div>
        </Children>
      </div>
    </>
  )
}

export default App
