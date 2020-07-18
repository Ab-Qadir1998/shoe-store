import React from 'react'
import { useParams } from 'react-router-dom';
import ShoeData from '../data.json'
 const ProductItem = () => {
    let { id } = useParams();
    const shoe = ShoeData[id];

    if(!shoe) {
        return <h2>Product not found!!!</h2>
    }
    return (

        <div>
           <div className="product-item">
                        <img src={shoe.img} width={500} alt={shoe.name}/>
                        <h3>{shoe.name}</h3>
                        <p>${shoe.price}</p>
                        {/* <button>Add To Cart</button> */}
                    </div>
        </div>
    )
}


export default ProductItem