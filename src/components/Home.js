import React from 'react'
import ShoeData from '../data.json'
import { Link } from 'react-router-dom'
const Home = () => {

    return (
        <div className="product-cont">
            {Object.keys(ShoeData).map(KeyName => {
                const shoe = ShoeData[KeyName];
                return (
                    <Link className="product-item" to={`/products/${KeyName}`} key={KeyName}>
                        <img src={shoe.img} width={200} alt={shoe.name}/>
                        <h3>{shoe.name}</h3>
                    </Link>
                );
            })}
        </div>
    )
}

export default Home;