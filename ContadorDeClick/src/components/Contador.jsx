import { useState, useEffect } from 'react'

const Contador = () => {
    const [click, settClick] = useState(0)
    const [msg, settMsg] = useState('')
    const [reset, settReset] = useState(0)

    useEffect (() => {
        if (click === 0) {
            settMsg("Começe a clicar")
        } else if (click < 10) {
            settMsg("Você clicou pouco")
        } else if (click < 20) {
            settMsg("Você está clicando muito")
        } else if (click === 20) {
            settMsg("Reiniciando contador")
        } else {
            settClick(0)
            settReset(reset + 1)
        }
    })



  return (
    <>
    <h1>Contador de clicks:</h1>
    
    <button onClick={() => settClick(click + 1)} style={{width: "10rem",height: "3rem", alignSelf: "center"}}>Clique aqui</button>   
    <h3>{click}</h3>
    <h3 style={{color: "red"}}>{msg}</h3>
    <h1>Contador de resets:</h1>
    <h3>{reset > 0 && <p>{reset}</p>}</h3>    
    </>
  )
}

export default Contador