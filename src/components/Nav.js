import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from './Home'
// import Cart from './Cart'
import About from './About'
// import Products from './Products'
import NotFound from './NotFound'
import nav from '../App.css'
import Logo from '../images/nike.png'
import ProductItem from './ProductItem'
const Nav = () => {
    return (


   
          <Router>
            <nav>
            <div>
            <Link to="/"><img src={Logo} alt="nike logo" className="logo"/></Link>
            </div>
            <div>
            <Link to="/" className="nav-link">Home</Link>
            {/* <Link to="/products" className="nav-link">Products</Link> */}
            <Link to="/about" className="nav-link">About</Link>
            {/* <Link to="/cart" className="nav-link">Cart</Link> */}
            </div>
            </nav>
               <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route path="/products" element={<Products />} /> */}
                    {/* <Route path="/cart" element={<Cart />} /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/products/:id" element={<ProductItem />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
              
            </Router>

     
    )
}

export default Nav;