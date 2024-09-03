import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGOROUGE.png'

function Header() {
    return (
        <header className="header">
            <nav>
                <img src={logo} alt="Logo du site" />
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? 'pending' : isActive ? 'active' : ''
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? 'pending' : isActive ? 'active' : ''
                            }
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* 
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav> */}
        </header>
    )
}

export default Header
