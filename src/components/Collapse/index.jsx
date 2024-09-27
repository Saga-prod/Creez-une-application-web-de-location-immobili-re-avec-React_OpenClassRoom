import { useState } from 'react'
import arrowCollapseUp from '../../assets/collapse_up.png'
import './Collapse.scss'

function Collapse({ title, msg, className }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="info">
            <div className={`titleIcon ${className}`}>
                <h2>{title}</h2>
                <i
                    onClick={toggleOpen}
                    style={{
                        transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s',
                    }}
                >
                    <img
                        src={arrowCollapseUp}
                        alt=" flèche pointant vers le haut"
                    />
                </i>
            </div>

            {isOpen && <p>{msg}</p>}
        </div>
    )
}

export default Collapse
