import './ButtonExc.css'

const ButtonExc = ({ id, action, type = "button" }) => {

    return (
        <div id='buttonExc'>
            <button id={id} onClick={action} type={type} className='Exclude'>
                <span> x </span>
            </button>
        </div>
    )
}


export default ButtonExc