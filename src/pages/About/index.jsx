import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import datas from '../../datas/aboutList.json'
import montagnes from '../../assets/Montagnes.png'

function About() {
    
    return (
        <>
            <section>
                <Banner cover={montagnes} className="about-banner" />
            </section>
            <section>
                {datas.map((data, index) => (
                    <Collapse key={index} title={data.title} msg={data.content} />
                ))}
            </section>
        </>
    )
}

export default About
