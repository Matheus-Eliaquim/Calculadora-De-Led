import { useState, useEffect } from 'react'

const RenderCondicionals = () => {
    const [click, settClick] = useState(1)
    const [msg, settMsg] = useState('')

    useEffect (() => {
        if (click === 1) {
            settMsg('')
        } else if (click % 2 === 0) {
            settMsg('Render condicional sem else ativo') 
        } else if (click % 2 === 1) {
            settMsg('')
        }
    }, [click])

  return (
    <>
        <button onClick={() => settClick(click + 1)}>Click Aqui!</button>        
        <h2>{click % 2 === 0 ? (<p>Render condicional com else condição verdadeira</p>) : (<p>Render condicional com else condição falsa</p>)}</h2>
        <h2>{click >= 1 && <p>{msg}</p>}</h2>      
    </>
  )
}

export default RenderCondicionals