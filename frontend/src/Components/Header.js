import React from 'react';
import imagen1 from '../Assets/5.jpg';
import '../App.css';

const Header = () => {
    return ( 
        <>
            <img src={imagen1} className='img-fluid imgHeader' alt='imagen portada'></img>
        </>
     );
}
 
export default Header;