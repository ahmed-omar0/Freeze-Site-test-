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
            <div className="body-footer">
                <form>
                    <fieldset>
                        <legend>INQUIRY FORM</legend>
                        <label className="sr-only" for="name">name</label>
                        <input type='text' id="name" placeholder="Name"/>
                        <label className="sr-only" for="email">email</label>
                        <input type='email' id="email" placeholder="Email"/>
                        <label className="sr-only" for="subject">subject</label>
                        <input type='text' id="subject" placeholder="Subject"/>
                        <textarea id="textarea" name="message" rows='7' cols="50" placeholder="Share your thoughts"></textarea>
                        <label className="sr-only" for="submit">submit</label>
                        <input type='submit' id="submit" placeholder="submit" value="send"/>
                    </fieldset>
                </form>
                <aside>
                    <h2>WE’D LOVE TO HEAR FROM YOU.</h2>
                    <p>If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
                </aside>
            </div>
        </section>        
    );
}
 
export default Body;