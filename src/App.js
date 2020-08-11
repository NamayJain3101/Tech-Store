import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactsPage from './Pages/ContactsPage';
import ProductsPage from './Pages/ProductsPage';
import DefaultPage from './Pages/DefaultPage';
import SingleProductPage from './Pages/SingleProductPage';
import CartPage from './Pages/CartPage';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Sidecart from './Components/Sidecart';
import Footer from './Components/Footer';

class App extends Component {
	render(){
		return(
		<>
			<Navbar />
			<Sidebar />
			<Sidecart />
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/about' exact component={AboutPage} />
				<Route path='/contact' exact component={ContactsPage} />
				<Route path='/products' exact component={ProductsPage} />
				<Route path='/cart' exact component={CartPage} />
				<Route path='/products/:id' exact component={SingleProductPage} />
				<Route component={DefaultPage} />
			</Switch>
			<Footer />
		</>
		)
	}
}

export default App;
