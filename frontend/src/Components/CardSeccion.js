import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


const CardSeccion = (props) => {
    return ( 
        <>
            <div className="card seccionCard">
                <img className="card-img-top img-fluid" src={props.img} alt="Card image" />
                <div className="card-body">
                    <div className='cajaCardSeccion'>
                        <h4 className="card-title">{props.titulo}</h4>
                        <p className="card-text">{props.descripcion}</p>
                    </div>
                    <a href="#" className="btn btn-primary botonCardSeccion" ><FontAwesomeIcon icon={faShoppingCart} /></a>
                </div>
            </div>
        </>
     );
}
 
export default CardSeccion;