import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';


const JumboMain = (props) => {
    return ( 
        <>
            <div className='d-flex w-25 articleJumbo'>
                <FontAwesomeIcon icon={props.icon}/>
                <div className='pr-5'>
                    <h4>{props.titulo}</h4>
                    <p>{props.descripcion}</p>
                </div>
            </div>
        </>
     );
}
 
export default JumboMain;