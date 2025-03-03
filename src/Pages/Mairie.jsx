import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Mairie(){

    const { language } = useContext(Context)

    return(

        <div className="arche">
            <div className="arche-card">
                <img src="arche-m6.png" className='arche-image' />
                <h1 className='mairie-title'>LA MAIRIE</h1>
                <div className="mairie-noms">
                    <h1 className='mairie-nom-1'>Noa</h1>
                    <h1 className='mairie-and'>&</h1>
                    <h1 className='mairie-nom-2'>David</h1>
                </div>
                <p className='mairie-text'>Se diront</p>
                <h2 className='mairie-oui'>"Oui"</h2>
                <p className='mairie-date'>Le dimanche 3 juin 2O24 <br /> à 12h00</p>
                <p className='mairie-endroit'>A la mairie de Saint Brice sous foret <br />95350</p>
                <p className='mairie-suite'>A issue de la cérémonie, un vin d'honneur seras servi sur place </p>
                <Waze name={'waze-mairie'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#536493' />
                <SaveTheDate name={'save-the-date-mairie'} date={[2024, 6, 3, 12, 0]} iconColor='#536493' iconHeight='18px' iconWidth='21px'/>
            </div>
        </div>

    )
}

export default Mairie