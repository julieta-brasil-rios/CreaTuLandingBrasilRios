import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import CategoryView from './pages/CategoryView';
import ProductDetail from './components/ItemDetailContainer';
import Contact from './pages/Contacto';
import Cart from './pages/Cart';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryView />} />
        <Route path="/item/:id" element={<ProductDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
