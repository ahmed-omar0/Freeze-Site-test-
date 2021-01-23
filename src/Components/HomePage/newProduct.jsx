import yogurt from '../../images/yogurt.jpg';
function NewProduct (){
    return(
        <section className="new-product">
            <div>
                <h1>NEW PRODUCT</h1>
                <h2>The Twist of Healthy Yogurt</h2>
                <p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
            </div>
            <img src={yogurt} alt='bg'/>
        </section>
    )
}

export default NewProduct;