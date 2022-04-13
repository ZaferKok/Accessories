import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './redux/mapStateToProps';
import mapDispatchToProps from './redux/mapDispatchToProps';
import { Routes, Route, NavLink } from 'react-router-dom';
import Accessories from './components/Accessories';
import Cart from './components/Cart';
import User from './components/User';
import Favorite from './components/Favorite';
import Navi from './components/Navi';
import Home from './components/Home';
import Order from './components/Order';
import './App.css';
import Product from './components/Product';


function App(props) {

  // <script
  //   src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  //   crossorigin>
  // </script>

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    credit: "",
    name: "",
    address: "",
    telefon: "",
  })

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
    //Favorite
    let favoriteString = localStorage.getItem("favorite")
    if (favoriteString != null) {
      const favoriteArray = JSON.parse(favoriteString)
      props.setFavorite(favoriteArray)
    } else {
      favoriteString = JSON.stringify(props.favorite)
      localStorage.setItem("favorite", favoriteString)
    }

  }, [])
  // After Update [cart]
  useEffect(() => {
    const cartString = JSON.stringify(props.cart)
    localStorage.setItem("cart", cartString)
  }, [props.cart])

  // After Update [favorite]
  useEffect(() => {
    const favoriteString = JSON.stringify(props.favorite)
    localStorage.setItem("favorite", favoriteString)
  }, [props.favorite])


  return (
    <div className='mainbox'>
      <Navi loginForm={loginForm} />
      <header><h1>...ACCESSORIES...</h1></header>
      <main>
        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route path='/womensaccessories' element={(<Accessories />)} />
          <Route path='/mensaccessories' element={(<Accessories />)} />
          <Route path='/cart' element={(<Cart />)} />
          <Route path='/favorite' element={(<Favorite />)} />
          <Route path='/user' element={(<User loginForm={loginForm} setLoginForm={setLoginForm} />)} />
          <Route path='/product' element={(<Product />)} />
          <Route path="/order" element={(<Order loginForm={loginForm} />)} />
        </Routes>
      </main>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
