import React from 'react';

const Nav = () => {
    return ( 
        <>
            <div className='row'>
                <div className='col-md-8'>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
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