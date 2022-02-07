import React from 'react';
import CardMain from './CardMain';
import imagenMain1 from '../Assets/20.jpg';
import imagenMainTermo from '../Assets/termo2.jpg';
import imagenMainBolso from '../Assets/bolsomatero3.jpg';
import imagenMainBombilla from '../Assets/4.jpg';
import imagenMainMochila from '../Assets/mochilamatera.jpg';


const Main = () => {
    return ( 
        <>
            <div className='d-flex fodoMain pt-3'>
                <CardMain img={imagenMain1} text='Mates'/>
                <CardMain img={imagenMainTermo} text='Termos' />
            </div>
            <div className='d-flex fodoMain' >
                <CardMain img={imagenMainBolso} text='Bolsos materos' />
                <CardMain img={imagenMainBombilla} text='Bombillas' />
                <CardMain img={imagenMainMochila} text='Mochilas materas' />
            </div>
        </>
     );
}
 
export default Main;