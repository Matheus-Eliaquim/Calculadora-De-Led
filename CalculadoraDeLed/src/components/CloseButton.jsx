import React from 'react'

const CloseButton = (id, action) => {
    
    const handleAction = (e) => action(e)

    return (
        <div>
            <button id={id} onClick={handleAction} > X </button>
        </div>
    )
}

export default CloseButton