import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import iconMate from '../Assets/mate3.png';
import '../App.css';


const Footer = () => {
    return ( 
        <footer className='conteiner-fluid fonFooder'>

            <div className='row pb-4'>
                <div className='col-md-6 d-flex justify-content-around'>
                    <div className='d-flex flex-column'>
                        <h4><u>Institucional</u></h4>
                        <a>Nosotros</a>
                        <a>Franquicias</a>
                        <a>Acceso mayorista</a>
                        <a>Locales</a>
                    </div>
                    <div className='d-flex flex-column'>
                        <h4><u>Ayuda</u></h4>
                        <a>Código de descuento</a>
                        <a>Como comprar</a>
                        <a>Envíos</a>
                        <a>Medios de pago</a>
                        <a>Mi cuenta</a>
                    </div>
                    <div className='d-flex flex-column'>
                        <h4><u>Contacto</u></h4>
                        <a>Tienda online</a>
                        <a>Regalos empresariales</a>
                        <a>Franquicias</a>
                        <a>Venta mayorista (a locales)</a>
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-around align-items-center'>
                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        <dt className='text-center'>Locales</dt>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faFacebookSquare}/>
                        <dt className='text-center'>FB</dt>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faTwitterSquare}/>
                        <dt className='text-center'>TW</dt>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faInstagramSquare}/>
                        <dt className='text-center'>IG</dt>
                    </div>
                </div>
            </div>

            <hr />

            <div className='row py-2'>
                <div className='col-md-6'>
                    <p className='margCopy'>&copy; 2021. Alejandro Rios. <u>Términos y condiciones</u></p>
                </div>
                <div className='col-md-6 alignMate'>
                    <img src={iconMate} alt='icon mate' className='icoMat'/>
                    <span>Tome un buen mate</span>
                </div>
            </div>

        </footer>
     );
}
 
export default Footer;