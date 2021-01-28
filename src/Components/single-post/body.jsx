import onDiet from '../../images/on-diet.png'
import strwberry from '../../images/strwberry-delights.jpg'
/*import berries from '../../images/berries.png'*/
import {NavLink} from 'react-router-dom'


const Body = () => {
    return ( 
        <section className="post-body">
            <div className="post">
                <div className="item">
                    <img src={strwberry} alt="strwberry"/>
                    <div className="item-text">
                        <h2>NEW CHILLS FOR SUMMER</h2>
                        <small>By Admin on <time datetime="2023-11-28">November 28, 2023</time></small>
                        <p>
                            You can replace all this text with your own text. You can remove any link to our website from this website template, 
                            you're free to use this website template without linking back to us. 
                            If you're having problems editing this website template, then don't hesitate to ask for help on the forum.<br/><br/>
                            You can replace all this text with your own text. You can remove any link to our website from this website template, 
                            you're free to use this website template without linking back to us. 
                            If you're having problems editing this website template, then don't hesitate to ask for help on the forum.
                        </p>
                        <NavLink to="/blog" role="button">back to blog</NavLink>
                    </div>
                </div>
            </div>
            <aside>
                <h2>Recent Posts</h2>
                <img src={onDiet} alt="onDiet"/>
                <h3>ON THE DIET</h3>
                <small>By Admin on <time datetime="2023-11-28">November 28, 2023</time></small>
                <p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
                <NavLink to="/blog" role="button">read more</NavLink>
            </aside>
        </section>        
    );
}
 
export default Body;