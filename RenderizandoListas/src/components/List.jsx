import { useState } from 'react'

const List = () => {
    const [nomes] = useState(["Matheus", "Marcos", "João"])
    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 30 },
        { id: 2, name: "Marcos", age: 26 },
        { id: 3, name: "Matheus", age: 20 },
    ])

    const deletRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }
    
    return (
        <>
            <ul>
                {/* nomes.map((item) => (<li>{item}</li>) ) render sem key*/}
                {users.map((user) => (<li key={user.id}>Nome: {user.name} <br /> Idade: {user.age}<br /><br /></li>))}
                <button onClick={deletRandom} style={{ width: "10rem", height: "1.5rem" }}>Delet Random User</button>
            </ul>
        </>
    )
}

export default List 

