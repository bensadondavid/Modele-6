import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Houppa(){

    const { language } = useContext(Context)

    return(

        <div className="houppa">
            <div className="img-houppa">
                <img src="arche-m6.png" className='arche-image-houppa' />
                <img src="logo-m6.png" className='logo-houppa' />
                <img src="kol-sasson-m6.png" className='kol-sasson' />
            </div>
                <h1 className='houppa-title'>La Houppa</h1>
                <div className="parents">
                    <div className="parents-fille">
                        <p>Mr et Mme John Doe</p>
                        <p>Mr et Mme John Doe</p>
                    </div>
                    <div className="parents-garcon">
                        <p>Mr et Mme John Doe</p>
                        <p>Mr et Mme John Doe</p>
                    </div>
                </div>
                <p className='houppa-text'>Ont la joie de vous faire part du mariage de leurs petits enfants et enfants</p>
                <p className='houppa-noms'>Noa & David</p>
                <p className='houppa-text'>Qui aura lieu avec l'aide d'Hachem</p>
                <p className='houppa-date'>Lundi 3 juin 2024 <br />כו’באייר תשפה <br />A partir de 18h00   </p>
                <p className='houppa-endroit'>A la salle Emeralde Garden <br /> Park Taassit Shourak, Beth Shemesh </p>
                <p className="pensee">"Une tendre pensée pour nos grands parents toujours presents dans nos coeurs"</p>
                <Waze name={'waze-houppa'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#271A11' />
                <SaveTheDate name={'save-the-date-houppa'} date={[2024, 6, 3, 12, 0]} iconColor='#271A11' iconHeight='18px' iconWidth='21px'/>
            </div>

    )
}

export default Houppa