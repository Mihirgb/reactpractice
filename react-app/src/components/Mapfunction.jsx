import React from 'react';
import products from '../constants';
const Mapfunction=()=>{
    
    const listitems=products.map(product=>{
        return(
            <li key={product.id} className='bg-white'>
            {product.title}
        </li>
        )
    })
    return(
        <ul>
            {listitems}
        </ul>
    )
}
export default Mapfunction;