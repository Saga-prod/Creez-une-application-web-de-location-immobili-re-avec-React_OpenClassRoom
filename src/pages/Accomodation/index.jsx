import { useParams } from 'react-router-dom'
import datas from '../../datas/jsondata.json'
import Carrousel from '../../components/Carrousel'
import Rating from '../../components/Rating'
import './Accomodation.scss'
import Error from '../Error'
import Collapse from '../../components/Collapse'

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
                                <button key={`${item}-${index}`}>{item}</button> // Changer, ce c'est pas des button //
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
            </div>
            <div className="container_description">
                <Collapse
                    className="title-logement"
                    title="Description"
                    msg={accomodation.description}
                />
                <Collapse
                    className="title-logement"
                    title="Équipement"
                    msg={accomodation.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                />
            </div>
        </section>
    )
}

export default Accomodation
