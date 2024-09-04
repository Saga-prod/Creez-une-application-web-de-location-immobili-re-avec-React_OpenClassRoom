// import PropTypes from 'prop-types'
// import DefaultPicture from '../../assets/Falaises.png'
import '../../styles/components/Card.scss'

function Card({ title, cover, id }) {
    return (
        <div key={id} className="cardContainer">
            <img
                className="cardImage"
                src={cover}
                alt="Premiere vue de l'appartement"
            />
            <div className="title">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

// Card.propTypes = {
//     title: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
// }

// Card.defaultProps = {
//     title: '',
//     picture: DefaultPicture,
// }

export default Card
