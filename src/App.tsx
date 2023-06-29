import './styles/App.css';
import DogFoodProductsPage from './views/DogFoodProductsPage.tsx';
import DogAutresProductsPage from './views/DogAutresProductsPage.tsx';
import CatFoodProductsPage from './views/CatFoodProductsPage.tsx';
import CatAutresProductsPage from './views/CatAutresProductsPage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './views/SignUp.tsx';
import SignIn from './views/SignIn.tsx';
import HomePage from './views/HomePage.tsx';
import ProductPage from './views/ProductPage.tsx';
import Cart from './views/cart.tsx';

function App() {
  return (
    <>
      <Router>
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
