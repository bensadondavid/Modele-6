import CountDown from '../Components/CountDown'
import { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function Entry(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="entry">
            <div className="entry-card">
                <p className="bsd">בס"ד</p>
                <img src="logo-m6.png" className='entry-logo' />
                <p className='entry-noms'>Noa & David</p>
                <p className='entry-date'>11 . 20 . 2024</p>
                <CountDown />
                <Link to='/home' className='invit-link'>Voir l'invitation</Link>
                <img src="arche-m6.png" className='entry-arche' />
            </div>
        </div>

    )
}

export default Entry