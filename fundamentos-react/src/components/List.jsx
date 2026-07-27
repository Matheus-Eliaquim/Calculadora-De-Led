import { useState } from 'react'

const List = () => {
    const [users, setUsers] = useState ([
        {id: 1, name: "Matheus", age: 30},
        {id: 2, name: "Marcos", age: 26},
        {id: 3, name: "Matheus", age: 20},
    ])

    {/* 
        ************************************Função para remover usuario aleatorio***********************************************
        Math.floor -> arredonda o valor que seja menor e que esteja mais proximo do numero utilizado
        Math.random -> sorteia um numero aleatorio entre 0 e 1, obs: o numero sorteado nunca será 0 ou 1 apenas numeros entre eles
        *4 garante que meu numero seja maior que 1 e menor que 3
        setUsers((prevUsers) -> inves de passar um novo array passo uma função 
        prevUsers.filter -> cria um novo array de acordo com o argumento que eu utilizar
        randomNumber !== user.id -> retorna todos os numeros que forem diferentes randomNumber        
        */}

    const deletRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

  return (
    <>
    <ul>
        {/* 
        user.map() -> Passa por todos os itens do Array
        (user) => (<li key={user.id}>{user.name} - {user.age}</li>) -> função anonima que recebe o argumento user e imprime o nome e idade do usuario
        A prop key -> propriedade utilizada para filtar cada item, sem ela o codigo gera um erro não fatal.
        */}
        {users.map((user) => (<li key={user.id}>{user.name} - {user.age}</li>))}
        <button onClick={deletRandom}>Delete Random User</button>
    </ul>
    </>
  )
}

export default List