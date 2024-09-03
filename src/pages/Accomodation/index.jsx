import { useParams } from 'react-router-dom'
import datas from '../../datas/jsondata.json'

function Accomodation() {
    const { idNumber } = useParams()

    function flatFinder(id) {
        return datas.find((data) => data.id === id)
    }

    const accomodation = flatFinder(idNumber)
    console.log(accomodation)

    return (
        <div>
            <h1>{accomodation.title}</h1>
            <p>{accomodation.description}</p>
            <p>{accomodation.rating} étoiles</p>
        </div>
    )
}

export default Accomodation
