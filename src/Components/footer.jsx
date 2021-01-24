import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { FaPinterestSquare } from 'react-icons/fa';
const Footer = () => {
    return ( 
        <footer>
            <ul>
                <li>
                    <a href="#some"><FaFacebookSquare/></a>
                </li>
                <li>
                    <a href="#some"><FaTwitterSquare/></a>
                </li>
                <li>
                    <a href="#some"><TiSocialGooglePlus/></a>
                </li>
                <li>
                    <a href="#some"><FaPinterestSquare/></a>
                </li>
            </ul>
            <p> &copy; 2021 Freeze. ALL Rights Reserved (AL.F.N.C)</p>
        </footer>
    );
}
 
export default Footer;