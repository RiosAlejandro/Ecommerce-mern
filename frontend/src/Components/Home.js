import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Article from './Article';


const Home = () => {
    return ( 
        <>
            <Nav />
            <Header />
            <Main />
            <Article />
            <Footer />
        </>
     );
}
 
export default Home;