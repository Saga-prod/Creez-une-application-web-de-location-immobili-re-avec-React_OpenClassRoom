import { useParams } from 'react-router-dom'
import datas from '../../datas/jsondata.json'
// import Error from '../Error'
import Carrousel from '../../components/Carrousel'
import Rating from '../../components/Rating'
import './Accomodation.scss'
import Error from '../Error'
// import Collapse from '../../components/Collapse'

function Accomodation() {
    const { idNumber } = useParams()

    function flatFinder(id) {
        return datas.find((data) => data.id === id)
    }

    const accomodation = flatFinder(idNumber)

    if (!accomodation) {
        return <Error />
    }

    return (
        <section>
            <Carrousel data={accomodation.pictures} />
            <div className="container">
                <div className="leftSideContainer">
                    <h1>{accomodation.title}</h1>
                    <p>{accomodation.location}</p>
                    <div className="buttonContainer">
                        {accomodation.tags.map((item, index) => {
                            return (
                                <button key={`${item}-${index}`}>{item}</button>
                            )
                        })}
                    </div>
                </div>
                <div className="rightSideContainer">
                    <div className="hostContainer">
                        <p>{accomodation.host.name}</p>
                        <img
                            src={accomodation.host.picture}
                            alt={`Présentation de l'hébergeur, ${accomodation.host.name}`}
                        />
                    </div>
                    <Rating rating={accomodation.rating} />
                </div>
                {/* <Collapse title={'titre'} content={'content'}/> */}
            </div>
        </section>
    )
}

export default Accomodation
