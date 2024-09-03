import Banner from '../../components/Banner'
import Card from '../../components/Card'
import imageFalaises from '../../assets/Falaises.png'
import data from '../../datas/jsondata.json'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Banner cover={imageFalaises} title='Chez vous, partout et ailleurs'/>
            <div className="gallery">
                {data.map((item) => {
                    return (
                        <Link to={`/accomodation/${item.id}`}>
                            <Card
                                cover={item.cover}
                                title={item.title}
                                id={item.id}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
