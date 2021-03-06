import React,{useState} from 'react'
import logo from './logo.svg'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import './App.css'
import "./css/main.scss"
import Header from './component/Header'
import Footer from './component/Footer'
import Login from './component/Login'
import Home from './pages/Home'
import Order from './pages/Order'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Member from './pages/Member'

function App() {

  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Member">
            <Member/>
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="/Order">
            <Order />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
          <Footer />
      </Container>
    </Router>
  );
}

export default App;
