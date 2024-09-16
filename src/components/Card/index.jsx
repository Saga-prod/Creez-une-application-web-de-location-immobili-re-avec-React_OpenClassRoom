import './Card.scss'

function Card({ data }) {
    return (
        <div key={data.id} className="cardContainer">
            <img
                className="cardImage"
                src={data.cover}
                alt="Premiere vue de l'appartement"
            />
            <div className="title">
                <h2>{data.title}</h2>
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
