import React from 'react';
import Main from './main';
import NewProduct from './newProduct';
import Icons from './icons';

function Home(){
    return(
        <React.Fragment>
            <Main/>
            <NewProduct/>
            <Icons/>
        </React.Fragment>
    )
}
export default Home