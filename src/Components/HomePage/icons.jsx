import {NavLink} from 'react-router-dom';

const Icons = () => {
    return ( 
        <ul className="icons">
            <li>
                <NavLink to="products">
                </NavLink>
                <h3>products</h3>
            </li>
            <li>
                <NavLink to="about">
                </NavLink>
                <h3>our story</h3>
            </li>
            <li>
                <NavLink to="products">
                </NavLink>
                <h3>flavors</h3>
            </li>
            <li>
                <NavLink to="contact-us">
                </NavLink>
                <h3>our locations</h3>
            </li>
        </ul>
    );
}
 
export default Icons;