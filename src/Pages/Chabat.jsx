import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Chabat(){

    const { language } = useContext(Context)

    return(

        <div className="arche">
           <div className="arche-card">
                <img src="arche-m6.png" className='arche-image' />
                <h1 className='chabat-title'>Le Chabat</h1>
                <div className="chabat-noms">
                    <p>Noa & David</p>
                </div>
                <p className='chabat-text'>Seront ravis de partager leur chabat hatan avec vous </p>
                <p className='chabat-date'>Le vendredi 8 <br /> et samedi 9 juin 2024</p>
                <p className='chabat-endroit'>A la synagogue Shaare Elyahou <br /> 13 guideon haozner<br />Jérusalem</p>
                <Waze name={'waze-chabat'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#536493' />
                <SaveTheDate name={'save-the-date-chabat'} date={[2024, 6, 3, 12, 0]} iconColor='#536493' iconHeight='18px' iconWidth='21px'/>
            </div>
        </div>

    )
}

export default Chabat