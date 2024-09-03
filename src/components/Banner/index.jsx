function Banner({ title, cover }) {
    return (
        <div>
            <img
                src={cover}
                alt="Vue d'un paysage en fond"
                height={150}
                width={1200}
                style={{ objectFit: 'cover' }}
            />
            <h1>{title}</h1>
        </div>
    )
}

export default Banner
