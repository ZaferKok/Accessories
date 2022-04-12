import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './redux/mapStateToProps';
import mapDispatchToProps from './redux/mapDispatchToProps';
import { Routes, Route, NavLink } from 'react-router-dom';
import Accessories from './components/Accessories';
import Cart from './components/Cart';
import User from './components/User';
import Favorite from './components/Favorite';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bootstrap from 'bootstrap';
import Navi from './components/Navi';
import Home from './components/Home';
import './App.css';
import Product from './components/Product';


function App(props) {
  <script
    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script>

  // After Initialization
  useEffect(() => {
    props.setMainCats() // Data load
    props.setSubCats()  // Data load
    props.setItems()    // Data load
    props.setUsers()    // Data load
    //Cart
    let cartString = localStorage.getItem("cart")
    if (cartString != null) {
      const cartArray = JSON.parse(cartString)
      props.setCart(cartArray)
    } else {
      cartString = JSON.stringify(props.cart)
      localStorage.setItem("cart", cartString)
    }
  }, [])

  // After Update [something]
  useEffect(() => {
    const cartString = JSON.stringify(props.cart)
    localStorage.setItem("cart", cartString)
  }, [props.cart])

  return (
    <div className='mainbox'>
      <Navi />
      <header><h1>...ACCESSORIES...</h1></header>
      <main>
        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route path='/womensaccessories' element={(<Accessories />)} />
          <Route path='/mensaccessories' element={(<Accessories />)} />
          <Route path='/cart' element={(<Cart />)} />
          <Route path='/favorite' element={(<Favorite />)} />
          <Route path='/user' element={(<User />)} />
          <Route path='/product' element={(<Product />)} />
        </Routes>
      </main>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
