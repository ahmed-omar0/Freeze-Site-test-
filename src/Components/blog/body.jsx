import onDiet from '../../images/on-diet.png'
import newChills from '../../images/new-chills.png'
import berries from '../../images/berries.png'

const Body = () => {
    return ( 
        <section className="blog-body">
            <div className="features">
                <div className="item1">
                    <img src={newChills} alt="newChills"/>
                    <div className="item-text">
                        <h2>NEW CHILLS FOR SUMMER</h2>
                        <small>By Admin on <time datetime="2023-11-28">November 28, 2023</time></small>
                        <p>
                            You can replace all this text with your own text. You can remove any link to our website from this website template, 
                            you're free to use this website template without linking back to us. If you're having problems editing this website template.
                        </p>
                        <a href="/blog" role="button">read more</a>
                    </div>
                </div>
                <div className="item2">
                    <img src={berries} alt="berries"/>
                    <div className="item-text">
                        <h2>BERRIES ON THE GROVE</h2>
                        <small>By Admin on <time datetime="2023-11-28">November 28, 2023</time></small>
                        <p>
                            You can replace all this text with your own text. You can remove any link to our website from this website template, 
                            you're free to use this website template without linking back to us. If you're having problems editing this website template.
                        </p>
                        <a href="/blog" role="button">read more</a>
                    </div>
                </div>
                <a href="/blog" role="button" className="load">load more</a>
            </div>
            <aside>
                <h2>Recent Posts</h2>
                <img src={onDiet} alt="onDiet"/>
                <h3>ON THE DIET</h3>
                <small>By Admin on <time datetime="2023-11-28">November 28, 2023</time></small>
                <p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
                <a href="/blog" role="button">read more</a>
            </aside>
        </section>        
    );
}
 
export default Body;