import locationIcon from '../../images/check-in.png'

const Body = () => {
    return ( 
        <section className="contact-us-body">
            <div className="location">
                <div className="location-content">
                    <img src={locationIcon} alt="location icon"/>
                    <div className="location-text">
                        <h2>UNIT 0123 , ABC BUILDING, BUSSINESS PARK</h2>
                        <p>If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
                    </div>
                </div>
            </div>
            <form>
            </form>
            <aside>
            </aside>
        </section>        
    );
}
 
export default Body;