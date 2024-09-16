import Banner from '../../components/Banner'
import Card from '../../components/Card'
import imageFalaises from '../../assets/Falaises.png'
import data from '../../datas/jsondata.json'
import { Link } from 'react-router-dom'
import './Home.scss'

function Home() {
    return (
        <main>
            <section>
                <Banner
                    cover={imageFalaises}
                    title="Chez vous, partout et ailleurs"
                    className="home-banner"
                />
            </section>
            <section>
                <div className="gallery">
                    {data.map((item) => {
                        return (
                            <Link to={`/accomodation/${item.id}`} className="card" key={`${item.title}-${item.id}`}>
                                <Card
                                    data={item}
                                />
                            </Link>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Home
