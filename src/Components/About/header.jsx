import bgHeader from '../../images/bg-header-about.jpg';

const Header = () => {
    return ( 
        <header className="about">
            <h1>about</h1>
            <div>
                <img src={bgHeader} alt='bg'/>
            </div>
        </header>
     );
}
 
export default Header;