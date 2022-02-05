import React from 'react';
import imagen1 from '../Assets/5.jpg';
import Cars from './Cars';
import img1 from '../Assets/4.jpg';
import img7 from '../Assets/7.jpg';
import img18 from '../Assets/18.jpg';
import '../App.css';

const Header = () => {
    return ( 
        <div className='contPort'>
            <img src={imagen1} className='img-fluid imgHeader' alt='imagen portada'></img>
            
            <div className='d-flex justify-content-between contCard'>
                <Cars img={img1} />
                <Cars img={img7} />
                <Cars img={img18} />
            </div>
        </div>
     );
}
 
export default Header;