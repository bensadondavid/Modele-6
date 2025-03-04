import { useContext } from 'react';
import { Context} from '../Context';
import Musique from '../Components/Musique'
import Mairie from './Mairie'
import Houppa from './Houppa'
import Chabat from './Chabat';
import Response from './Response';

function Home(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="home">
            <p className='bsd'>בס"ד</p>
            <Musique />
            <Mairie />
            <Houppa />
            <Chabat />
            <Response />
        </div>

    )
}

export default Home