import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGOROUGE.png'
import '../../styles/components/Header.scss'

function Header() {
    return (
        <header className="header">
            <nav>
                <img src={logo} alt="Logo du site" />
                <div className="navLinkContainer">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        A propos
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
