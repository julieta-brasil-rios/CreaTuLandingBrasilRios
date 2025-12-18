import CategoryView from "./pages/CategoryView"
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from "./pages/Contacto";
import ProductDetail from "./components/ItemDetailContainer";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element ={<HomePage/>}/>
      <Route exact path="/category/:categoryId" element ={<CategoryView/>}/>
      <Route exact path='/item/:id' element ={<ProductDetail/>}/>
      <Route exact path='/contacto' element ={<Contact/>}/>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;