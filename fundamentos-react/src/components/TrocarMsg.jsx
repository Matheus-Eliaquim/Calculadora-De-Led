const TrocarMsg = ({handlemsg}) => {
    const msg = ["Oi", "Olá", "Iae"]
    return (
        <>
            <button onClick={() => handlemsg(msg[0])}>1</button>
            <button onClick={() => handlemsg(msg[1])}>2</button>
            <button onClick={() => handlemsg(msg[2])}>3</button>
        </>
    )
}

export default TrocarMsg