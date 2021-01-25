import mango from '../../images/mango.jpg'
import blackberry from '../../images/blackberry.jpg'
import strawberry from '../../images/strawberry.jpg'
import blueberry from '../../images/blueberry.jpg'
import grapes from '../../images/grapes.jpg'
import greenapple from '../../images/green-apple.jpg'
import pineapple from '../../images/pineapple.jpg'

const Body = () => {
    return ( 
        <section className="body">
            <div className="aside-text">
                <h2>All Time Classic</h2>
                <p>It's a special collection of classic flavories. you can try all of them</p>
            </div>
            <div className="item-1">
                <img src={mango} alt='kiwi'/>
                <h3>kiwi</h3>
            </div>
            <div className="item-2">
                <img src={mango} alt='mango'/>
                <h3>mango</h3>
            </div>
            <div className="item-3">
                <img src={mango} alt='cantaloup'/>
                <h3>cantaloup</h3>
            </div>
            <div className="aside-text">
                <h2>Berry Special</h2>
                <p>It's a special collection of berry ice cream. you can try all of them</p>
            </div>
            <div className="item-4">
                <img src={blackberry} alt='blackberry'/>
                <h3>blackberry</h3>
            </div>
            <div className="item-5">
                <img src={strawberry} alt='strawberry'/>
                <h3>strawberry</h3>
            </div>
            <div className="item-6">
                <img src={blueberry} alt='blueberry'/>
                <h3>blueberry</h3>
            </div>
            <div className="aside-text">
                <h2>Fruit Blast</h2>
                <p>It's a special collection of Fruit Blast. you can try all of them</p>
            </div>
            <div className="item-7">
                <img src={grapes} alt='grapes'/>
                <h3>grapes</h3>
            </div>
            <div className="item-8">
                <img src={greenapple} alt='greenapple'/>
                <h3>greenapple</h3>
            </div>
            <div className="item-9">
                <img src={pineapple} alt='pineapple'/>
                <h3>pineapple</h3>
            </div>
        </section>
    );
}
 
export default Body;