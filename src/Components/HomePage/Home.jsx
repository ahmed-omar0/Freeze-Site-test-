import React from 'react';
import Nav from './Nav';
import Main from './main';
import NewProduct from './newProduct';
import Icons from './icons';
import Footer from './footer';

function Home(){
    return(
        <React.Fragment>
            <Nav/>
            <Main/>
            <NewProduct/>
            <Icons/>
            <Footer/>
        </React.Fragment>
    )
}
export default Home