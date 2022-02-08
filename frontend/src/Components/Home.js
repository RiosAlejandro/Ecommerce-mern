import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Article from './Article';
import Seccion from './Seccion';


const Home = () => {
    return ( 
        <>
            <Nav />
            <Header />
            <Main />
            <Article />
            <Seccion />
            <Footer />
        </>
     );
}
 
export default Home;