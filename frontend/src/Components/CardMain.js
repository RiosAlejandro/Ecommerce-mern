import React from 'react';
import '../App.css';


const CardMain = (props) => {
    return ( 
        <>
            <div className="card MainCard">
                <img className="card-img-top h-100" src={props.img} alt="imagen main" />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title tituloCardMain">{props.text}</h4>
                    <button type="button" class="btn btn-lg btn-outline-light text-dark botMainCard">COMPRAR AHORA</button>
                </div>
            </div>
        </>
     );
}
 
export default CardMain;