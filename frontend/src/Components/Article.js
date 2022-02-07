import React from 'react';
import { faTruck, faClock, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import JumboMain from './jumboArticle';
import imagenArticle from '../Assets/article1.jpg';


const Article = () => {
    return ( 
        <>
            <h2 className='text-center mb-5 mt-4' >¿Porqué confiar en nosotros?</h2>
            <div className='d-flex justify-content-center' >
                <JumboMain icon={faTruck} titulo='Rápida entrega' descripcion='Since 1993, we have been preparing our high quality products for our elite customers and personalizing, we have been preparing our high quality products for our elite customers and personalizing'/>
                <JumboMain icon={faClock} titulo='Modelos de diseño' descripcion='Since 1993, we have been preparing our high quality products for our elite customers and personalizing, we have been preparing our high quality products for our elite customers and personalizing'/>
                <JumboMain icon={faSearchDollar} titulo='Relación precio-calidad' descripcion='Since 1993, we have been preparing our high quality products for our elite customers and personalizing, we have been preparing our high quality products for our elite customers and personalizing'/>
            </div>
            {/*<div className='areaImgArticle'>*/}
                <img src={imagenArticle} className='imgArticle'/>
            {/*</div>*/}
        </>
     );
}
 
export default Article;