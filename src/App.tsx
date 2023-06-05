import './styles/App.css';
import ProductsPage from './views/ProductsPage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './views/SignUp.tsx';
import SignIn from './views/SignIn.tsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/productsPage" element={<ProductsPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
