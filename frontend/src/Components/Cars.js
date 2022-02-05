import React from 'react';
import '../App.css';


const Cars = (props) => {
    return ( 
        <>
            <div className="card border border-0">
                <img className="card-img-top h-75" src={props.img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title text-center">John Doe</h4>
                </div>
            </div>
        </>
     );
}
 
export default Cars;