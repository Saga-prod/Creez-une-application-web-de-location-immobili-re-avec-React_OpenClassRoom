import '../../styles/components/Banner.scss'

function Banner({ title, cover, className }) {
    return (
        <div className={`banner ${className}`}>
            <img
                src={cover}
                alt="Vue d'un paysage en fond"
            />
            <h1>{title}</h1>
        </div>
    )
}

export default Banner
