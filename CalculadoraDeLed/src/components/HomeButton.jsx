import React from 'react'
import './HomeButton.css'
import './responsividade.css'

const HomeButton = ({ id, action }) => {

    const handleAction = (e) => action(e)

    return (
        <div id="divClose">
            <button
                id={id}
                onClick={handleAction}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 3L2 12H5V21H10V15H14V21H19V12H22L12 3Z" />
                </svg>
            </button>
        </div>
    )
}

export default HomeButton