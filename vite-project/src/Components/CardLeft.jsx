import CurveLogo from '../assets/Thecurve_logo.png'
import KoraLogo from '../assets/kora.png'



function CardLeft ({stack, id, stackbg, stacklogo}) {

    return(

        <>
        <div className="CardLeftBody" style={{background: stackbg}}>
            <img src={CurveLogo} alt="Curve"></img>
            <h1>{stack}</h1>
            <img className='StackLogo' src={stacklogo} alt="Curve"></img>
            <h4>{id}</h4>
            <p>Sponsored By <span><img src={KoraLogo} alt="Kora"></img></span></p>
        </div>
        </>
    )
}

export default CardLeft