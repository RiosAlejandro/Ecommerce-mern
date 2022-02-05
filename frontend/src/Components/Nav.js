import React from 'react';

const Nav = () => {
    return ( 
        <>
            <div className='row'>
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
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-4 d-flex justify-content-around'>
                    <span>hola </span>
                    <span>mundo </span>
                </div>
            </div>
        </>
     );
}
 
export default Nav;