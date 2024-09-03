import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/Falaises.png'

function Card({ title, cover, id }) {
    return (
        <div>
            <img src={cover} alt="Premiere vue de l'appartement" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: '',
    picture: DefaultPicture,
}

export default Card