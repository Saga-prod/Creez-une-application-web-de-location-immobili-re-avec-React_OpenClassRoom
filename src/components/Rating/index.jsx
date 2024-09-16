import activeStar from '../../assets/star-active.png'
import inactiveStar from '../../assets/star-inactive.png'
import './Rating.scss'

function Rating({ rating }) {
    return (
        <div className="star">
            {[...Array(5)].map((_, index) => {
                return (
                    <span key={index}>
                        <img
                            src={index < rating ? activeStar : inactiveStar}
                            alt="Notation via des étoiles"
                        />
                    </span>
                )
            })}
        </div>
    )
}

export default Rating
