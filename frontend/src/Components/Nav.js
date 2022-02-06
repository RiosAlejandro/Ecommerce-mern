import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Nav = () => {
    return ( 
        <>
            <div className='row navegacion'>
                <div className='col-md-8'>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-4 d-flex justify-content-around'>
                    <FontAwesomeIcon icon={faUser} />
                    <span>hola </span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>mundo </span>
                </div>
            </div>
        </>
     );
}
 
export default Nav;