import { useParams } from 'react-router-dom'
import datas from '../../datas/jsondata.json'
import Carrousel from '../../components/Carrousel/Carrousel'
import '../../styles/pages/Accomodation.scss'

function Accomodation() {
    const { idNumber } = useParams()

    function flatFinder(id) {
        return datas.find((data) => data.id === id)
    }

    const accomodation = flatFinder(idNumber)
    const accomodationTags = accomodation.tags
    const host = accomodation.host

    return (
        <section>
            <Carrousel data={accomodation.pictures}/>
            <div className='container'>
                <div className='leftSideContainer'>
                    <h1>{accomodation.title}</h1>
                    <p>{accomodation.location}</p>
                    <div className="buttonContainer">
                        {accomodationTags.map((item, index) => {
                            return (
                                <button key={`${item}-${index}`}>{item}</button>
                            )
                        })}
                    </div>
                </div>
                <div className='rightSideContainer'>
                    <div className='hostContainer'>
                        <p>{host.name}</p>
                        <img
                            src={host.picture}
                            alt={`Présentation de l'hébergeur, ${host.name}`}
                        />
                    </div>
                    <div>{accomodation.rating}</div>
                </div>
                {/* Liste déroulante */}
            </div>
            <div></div>
        </section>
    )
}

export default Accomodation
