import {useState, useEffect} from "react"
import './App.css'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]) //resgatando dados

  useEffect (() => {
    async function getData() {

      const res = await fetch(url)  

      const data = await res.json()

      console.log(data)
    }

    getData()
  }, [])

  return (
    <>
    <h1>Protocolo HTTP</h1>    
    </>
  )
}

export default App
