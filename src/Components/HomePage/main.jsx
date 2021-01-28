import bg from '../../images/bg-home.jpg'
import {NavLink} from 'react-router-dom'

function Main (){
    return(
        <main>
            <img src={bg} alt="bg"/>
            <div>
                <NavLink to="products">
                    freeze delight
                </NavLink>
            </div>
        </main>
    )
}

export default Main;