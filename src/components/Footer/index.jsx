import footerLogo from '../../assets/LOGOBLANC.png'
import '../../styles/components/Footer.scss'

function Footer() {
    return (
        <div className="footerContainer">
            <img src={footerLogo} alt="Logo du site en blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer