import './App.css'
import { useState } from 'react'
import Button from './components/Button.jsx'
import CalculadoraDeLed from './CalculadoraDeLed.jsx'
import CalculadoraDePerfil from './CalculadoraDePerfil.jsx'




function App() {
  // Estado que guarda qual opção foi selecionada
  // Pode ser "led", "perfil" ou null (nenhuma selecionada)
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null)

  return (
    <div id="initial">
      {/* Se nenhuma opção foi selecionada, mostra os botões */}
      {opcaoSelecionada === null && (
        <div id="buttons">
          {/* Botão para abrir a calculadora de fita led */}
          <Button
            id="button-initial01"
            text="Calculadora de fita led"
            action={(e) => {
              e.preventDefault()
              // Define que a opção escolhida foi "led"
              setOpcaoSelecionada("led")
            }}
          />
          {/* Botão para abrir a calculadora de perfil */}
          <Button
            id="button-initial02"
            text="Calculadora de perfil"
            action={(e) => {
              e.preventDefault()
              // Define que a opção escolhida foi "perfil"
              setOpcaoSelecionada("perfil")
            }}
          />
        </div>
      )}

      {/* Renderiza apenas o componente escolhido */}
      {opcaoSelecionada === "led" && <CalculadoraDeLed back={setOpcaoSelecionada} />}
      {opcaoSelecionada === "perfil" && <CalculadoraDePerfil back={setOpcaoSelecionada} />}

    </div>
  )
}

export default App
