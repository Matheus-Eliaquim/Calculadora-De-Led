import Classes from './CssModule.module.css'
/*sempre lembrar de não usar o ID e sim className= {Classes.xxxx} */

const CssModule = () => {
    return (
        <>
            <h1 className={Classes.titulo}>Meu titulo</h1>
            <p className={Classes.texto}>Não queria escrever nada, finge que tem um texto aqui!</p>
        </>
    )
}

export default CssModule