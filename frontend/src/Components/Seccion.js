import React from 'react';
import imagen1 from '../Assets/seccion1.jpg';
import imagen2 from '../Assets/seccion2.jpg';
import imagen3 from '../Assets/seccion3.jpg';
import imagen4 from '../Assets/seccion4.jpg';
import CardSeccion from './CardSeccion';
import '../App.css';

const Seccion = () => {
      

    return ( 
        <>
            <h2 className='text-center mb-5'>Los destacados</h2>
            <div className='d-flex secciones justify-content-center mb-5'>
                <CardSeccion img={imagen1} titulo='Mate Imperial' descripcion='De cuero con virola de alpaca'/>
                <CardSeccion img={imagen2} titulo='Mate Imperial' descripcion='Virola De Alpaca Cincelada A Mano Cuero Vacuno'/>
                <CardSeccion img={imagen3} titulo='Mate de Camionero' descripcion='De cuero y acero, con base reforzada'/>
                <CardSeccion img={imagen4} titulo='Mate Torpedo + Bombilla de Alpaca' descripcion='Calabaza, cuero y virola de acero inoxidable'/>
            </div>
        </>
     );
}
 

export default Seccion;