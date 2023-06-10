import './styles/App.css';
import ProductsPage from './views/ProductsPage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './views/SignUp.tsx';
import SignIn from './views/SignIn.tsx';
import HomePage from './views/HomePage.tsx';
import ProductPage from './views/ProductPage.tsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productsPage" element={<ProductsPage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
