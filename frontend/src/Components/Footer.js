import React from 'react';
import '../App.css';


const Footer = () => {
    return ( 
        <footer className='conteiner-fluid'>

            <div className='row'>
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
                <div className='col-md-6'>
                    <div>
                        <i></i>
                        <dt>Locales</dt>
                    </div>
                    <div>
                        <i></i>
                        <dt>FB</dt>
                    </div>
                    <div>
                        <i></i>
                        <dt>TW</dt>
                    </div>
                    <div>
                        <i></i>
                        <dt>IG</dt>
                    </div>
                </div>
            </div>

            <hr />

            <div className='row'>
                <div className='col-md-6'>
                    <p>&copy; 2021. Alejandro Rios. <u>Términos y condiciones</u></p>
                </div>
                <div className='col-md-6 text-left'>
                    <i></i>
                    <span>Tome un buen mate</span>
                </div>
            </div>

        </footer>
     );
}
 
export default Footer;