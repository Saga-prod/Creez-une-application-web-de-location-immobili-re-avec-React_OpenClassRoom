// import { Outlet, Link, useParams } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <p>Question numéro {questionNumber}</p>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
            {questionNumberInt === 10 ? (
                <Link to="/survey/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            )}
            {/* <Link to="client">Questionnaire Client</Link>
            <Link to="freelance">Questionnaire Freelance</Link>
            <Outlet /> */}
        </div>
    )
}
export default Survey
