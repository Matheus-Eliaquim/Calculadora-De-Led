import './Button.css'

const Button = ({id, text, action}) => {
    return (
        <div>
            <button id={id} onClick={action} > {text} </button>
        </div>
    )
}

export default Button