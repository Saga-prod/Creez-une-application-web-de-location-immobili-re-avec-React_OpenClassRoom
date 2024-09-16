import React, { useState } from 'react'
// import collapseUp from '../../assets/collapse_up.png'
import collapseDown from '../../assets/collapse_down.png'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    function openCollapse() {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapseContainer">
            <h2>{title}</h2>
            <i
                onClick={openCollapse}
            >
                <img src={collapseDown} alt=" flèche pointant vers le bas" />
            </i>

            {isOpen && <p>{content}</p>}
        </div>
    )
}

export default Collapse
