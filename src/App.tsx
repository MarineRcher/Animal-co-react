import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import DogFoodProductsPage from './views/DogFoodProductsPage';
import DogAutresProductsPage from './views/DogAutresProductsPage';
import CatFoodProductsPage from './views/CatFoodProductsPage';
import CatAutresProductsPage from './views/CatAutresProductsPage';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import HomePage from './views/HomePage';
import ProductPage from './views/ProductPage';
import Cart from './views/cart';

function App() {
  return (
    <>
      <Router> 
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dog/Food" element={<DogFoodProductsPage />} />
          <Route path="/Dog/Others" element={<DogAutresProductsPage />} />
          <Route path="/Cat/Food" element={<CatFoodProductsPage />} />
          <Route path="/Cat/Others" element={<CatAutresProductsPage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/shopCart" element={<Cart />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
