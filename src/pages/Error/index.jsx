import { Link } from "react-router-dom"
import './Error.scss'

function Error() {
    return (
        <div>
            <section className="error">
                <h2>404</h2>
                <div className="center_paragraphe">
                    <p>Oups! La page que vous demandez n'existe pas. </p>
                </div>
                <Link to="/">Retourner sur la page d'acceuil</Link>
            </section>
        </div>
    )
}

export default Error
