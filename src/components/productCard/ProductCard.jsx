import React from 'react'
import './ProductCard.css'


export default function ProductCard({product}) {
    
    

    return (
        <div className='grid-container'>
            <div className="card" >
                <div className="card-container">
                    <img src={product.imgsrc} alt='imagee' />
                    <h3 style={{margin:'0'}}>{product.brand}</h3>
                    <p style={{margin:'5px 0'}}>{product.name}</p>
                    <p style={{margin:'0'}}><b>Rs.{product.price}</b></p>
                </div>
            </div>
        </div>

       
    )
}
