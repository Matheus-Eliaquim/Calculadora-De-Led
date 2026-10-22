import React from 'react'
import './CloseButton.css'
import './responsividade.css'

const CloseButton = ({id, action}) => {

    const handleAction = (e) => action(e)

    return (
        <div id="divClose"> 
            <button
                id={id}
                onClick={handleAction}
            >
                X
            </button>
        </div>
    )
}

export default CloseButton