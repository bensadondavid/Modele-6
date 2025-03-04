import { useContext } from 'react'
import { Context } from '../Context'
import Form from '../Components/Form'

function Response(){

    const { language } = useContext(Context)

    return(

        <div className="response">
            <p className="response-title">La Réponse</p>
            <p className='reponse-souhaite'>Réponse souhaitée dès réception</p>
            <Form />
            <img src="fleur-bas-m6.png" className='fleur-bas' />
        </div>

    )
}

export default Response